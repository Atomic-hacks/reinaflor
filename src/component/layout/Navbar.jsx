import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const focusableSelector =
  "a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])";

const getFocusableElements = (container) => {
  if (!container) return [];
  return Array.from(container.querySelectorAll(focusableSelector));
};

const Navbar = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();
  const panelRef = useRef(null);

  const navLinks = [
    {
      name: "Shop",
      href: "/shop",
      hasDropdown: true,
      dropdownItems: [
        { name: "All Products", href: "/shop/all" },
        { name: "New Arrivals", href: "/shop/new" },
        { name: "Tops", href: "/shop/tops" },
        { name: "Bottoms", href: "/shop/bottoms" },
        { name: "Summer Collection", href: "/shop/summer" },
      ],
    },
    { name: "Brand", href: "/brand" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileOpen) return;

    const previousFocus = document.activeElement;
    const focusables = getFocusableElements(panelRef.current);
    focusables[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const elements = getFocusableElements(panelRef.current);
        if (elements.length === 0) return;

        const first = elements[0];
        const last = elements[elements.length - 1];
        const isShift = event.shiftKey;

        if (isShift && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!isShift && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (previousFocus && previousFocus.focus) {
        previousFocus.focus();
      }
    };
  }, [isMobileOpen]);

  return (
    <nav className="relative w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex items-center justify-between px-4 md:px-16 py-2">
        {/* Left Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsShopOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsShopOpen(false)}
            >
              <Link
                to={link.href}
                className="group relative font-medium text-black transition-colors hover:text-gray-600"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
              </Link>

              {link.hasDropdown && (
                <div
                  className={`absolute left-0 top-full pt-4 transition-all duration-300 ease-out ${
                    isShopOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="min-w-[200px] rounded-sm border border-gray-200 bg-white shadow-lg overflow-hidden">
                    {link.dropdownItems?.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="group/item relative block px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-50"
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: isShopOpen
                            ? "slideIn 0.3s ease-out forwards"
                            : "none",
                        }}
                      >
                        {item.name}
                        <span className="absolute left-5 bottom-2 h-px w-0 bg-black transition-all duration-300 ease-out group-hover/item:w-[calc(100%-2.5rem)]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center Logo - Desktop */}
        <Link
          to="/"
          className="hidden md:block absolute left-1/2 -translate-x-1/2"
        >
          <span className="text-2xl font-bold tracking-tight">Atom</span>
          <sup className="text-xs">®</sup>
        </Link>

        {/* Mobile Logo */}
        <Link to="/" className="md:hidden">
          <span className="text-2xl font-bold tracking-tight">Atom</span>
          <sup className="text-xs">®</sup>
        </Link>

        {/* Right Side Icons - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <button className="group relative p-1 transition-transform hover:scale-110">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-colors"
            >
              <circle cx="8.5" cy="8.5" r="5.5" />
              <path d="M12.5 12.5l4 4" strokeLinecap="round" />
            </svg>
          </button>

          <Link
            to="/account"
            className="group relative text-sm font-medium text-black transition-colors hover:text-gray-600"
          >
            Account
            <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
          </Link>

          <button className="transition-transform hover:scale-110">
            <img
              src="/img/flag.png"
              alt="US"
              width="24"
              height="16"
              className="object-contain"
            />
          </button>

          <button
            type="button"
            onClick={openCart}
            className="group relative text-sm font-medium text-black transition-colors hover:text-gray-600"
          >
            CART ({itemCount})
            <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            onClick={openCart}
            className="text-xs font-semibold tracking-wide text-black"
          >
            CART ({itemCount})
          </button>
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-black"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M3 5h12M3 9h12M3 13h12" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <Motion.div
              className="fixed inset-0 z-40 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setIsMobileOpen(false)}
            />

            <Motion.aside
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              ref={panelRef}
              className="fixed right-0 top-0 z-50 h-full w-[82%] max-w-[360px] bg-white shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                <span className="text-xl font-bold tracking-tight">Atom</span>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M10.5 3.5L3.5 10.5M3.5 3.5l7 7" />
                  </svg>
                </button>
              </div>

              <nav className="px-6 py-6 space-y-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="space-y-3">
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-lg font-semibold text-black"
                    >
                      {link.name}
                    </Link>

                    {link.dropdownItems && (
                      <div className="space-y-2">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="block text-sm font-medium text-gray-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/account"
                    onClick={() => setIsMobileOpen(false)}
                    className="text-sm font-semibold text-black"
                  >
                    Account
                  </Link>
                </div>
              </nav>
            </Motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
