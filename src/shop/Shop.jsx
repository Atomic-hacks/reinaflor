import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../component/ui/Card";
import Button from "../component/ui/special-button";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import { products as allProducts, formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const categories = ["All", "Tops", "Bottoms", "New", "Summer 2025"];

  // Filter cards based on activeCategory
  const filteredCards =
    activeCategory === "All"
      ? allProducts
      : activeCategory === "New"
        ? allProducts.filter((item) => item.isNew)
        : allProducts.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white px-4 md:px-32">
      {/* Header Section */}
      <div className="relative py-16 bg-white">
        <div className="flex items-start justify-between">
          <div className="max-w-2xl">
            <AnimatedPageTitle
              title="Shop"
              className="text-[5.5rem] md:text-[5.5rem] font-normal tracking-wide mb-6 text-black"
            />
            <p className="text-lg tracking-wide leading-relaxed max-w-lg text-gray-900">
              Explore Atom's premium lifestyle clothing catalog, featuring
              high-end casual wear for the modern individual.
            </p>
          </div>

          {/* Close button */}
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg
              width="16"
              height="16"
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
      </div>

      {/* Category Navigation */}
      <div className="">
        <div className="flex items-center justify-end gap-6 ">
          {categories.map((category) => (
            <Button
              key={category}
              title={category}
              onPress={() => setActiveCategory(category)}
              containerClass={`pb-4 text-base font-medium transition-all relative border-none ${
                activeCategory === category
                  ? "text-black! "
                  : "text-gray-400! hover:text-gray-600!"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex justify-center pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4">
          {filteredCards.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onClick={() => navigate(`/shop/${item.id}`)}
            >
              {item.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-xs font-semibold tracking-wider">
                  NEW
                </div>
              )}
              <Card
                img={item.image}
                hoverImg={item.hoverImage}
                alt={item.name}
                title={item.name}
                price={formatPrice(item.price)}
                onQuickAdd={() => addToCart(item, 1)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
