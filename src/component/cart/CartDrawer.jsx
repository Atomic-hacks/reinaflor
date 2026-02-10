import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../data/products";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const CartDrawer = () => {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    updateQty,
    removeFromCart,
    subtotal,
  } = useCart();

  useEffect(() => {
    if (!isCartOpen) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        closeCart();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isCartOpen, closeCart]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    return undefined;
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.button
            type="button"
            aria-label="Close cart"
            className="absolute inset-0 bg-black/40"
            variants={overlayVariants}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={closeCart}
          />
          <motion.div
            className="absolute right-0 top-0 h-full w-full sm:max-w-md md:max-w-lg bg-white text-black shadow-2xl flex flex-col"
            variants={drawerVariants}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <h3 className="text-lg font-semibold">Your Cart</h3>
              <button
                type="button"
                onClick={closeCart}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M12 4L4 12M4 4l8 8" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cartItems.length === 0 && (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              )}
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-gray-400 hover:text-gray-600"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center border border-gray-200">
                        <button
                          type="button"
                          className="w-8 h-8 text-sm"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          className="w-8 h-8 text-sm"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-semibold">
                        {formatPrice(item.product.price * item.qty)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 px-6 py-5">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="mt-4 w-full bg-black text-white py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
