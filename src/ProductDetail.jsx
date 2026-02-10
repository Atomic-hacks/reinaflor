import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { formatPrice, getProductById, products } from "./data/products";
import { useCart } from "./context/CartContext";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [activeTab, setActiveTab] = useState("DESCRIPTION");
  const { id } = useParams();
  const { addToCart } = useCart();

  const sizes = ["S", "M", "L", "XL"];
  const tabs = ["DESCRIPTION", "SIZE & FIT", "RETURNS"];
  const product = useMemo(() => getProductById(id), [id]);
  const moreTops = useMemo(
    () => products.filter((item) => item.category === "Tops").slice(0, 3),
    []
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-white px-8 md:px-16 lg:px-24 py-20">
        <p className="text-sm text-gray-600 tracking-wide">
          Product not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="px-8 md:px-16 lg:px-24 py-6">
        <p className="text-xs text-gray-600 tracking-wide">HOME / TOPS</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_400px] gap-0">
        {/* Product Image 1 - Flat Lay */}
        <div className="bg-gray-100">
          <img
            src={product.images?.[0] || product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Image 2 - Model */}
        <div className="bg-gray-100">
          <img
            src={product.images?.[1] || product.hoverImage || product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details Sidebar */}
        <div className="px-8 py-8 flex flex-col">
          {/* Product Title & Price */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
            <p className="text-lg">{formatPrice(product.price)}</p>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <p className="text-sm font-semibold mb-4">Size</p>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-sm font-medium border transition-colors ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            disabled={!selectedSize}
            className={`w-full py-3 text-sm font-medium mb-4 transition-colors ${
              selectedSize
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            onClick={() => addToCart(product, 1)}
          >
            {selectedSize ? "Add to Cart" : "Select Size"}
          </button>

          {/* Shop Pay Button */}
          <button className="w-full bg-[#5a31f4] text-white py-3 text-sm font-medium rounded-md flex items-center justify-center gap-2 hover:bg-[#4e28d9] transition-colors mb-8">
            <span className="font-bold">shop</span>
            <span className="font-normal">Pay</span>
          </button>

          {/* Product Information Tabs */}
          <div className="border-t border-gray-200">
            {tabs.map((tab) => (
              <div key={tab} className="border-b border-gray-200">
                <button
                  onClick={() => setActiveTab(tab)}
                  className="w-full py-4 text-left text-xs font-semibold tracking-wide hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  {tab}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform ${
                      activeTab === tab ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M3 5l3 3 3-3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {activeTab === tab && (
                  <div className="pb-4 px-1 text-sm text-gray-600 leading-relaxed">
                    {tab === "DESCRIPTION" && (
                      <p>
                        Premium black crewneck sweatshirt crafted from 100%
                        organic cotton. Features a relaxed fit with ribbed cuffs
                        and hem. Perfect for everyday wear.
                      </p>
                    )}
                    {tab === "SIZE & FIT" && (
                      <p>
                        Model is 6'1" and wears size M. This item fits true to
                        size. For a relaxed fit, we recommend sizing up.
                      </p>
                    )}
                    {tab === "RETURNS" && (
                      <p>
                        Free returns within 30 days of purchase. Items must be
                        unworn and in original condition with tags attached.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="w-full bg-white py-16 px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">More Tops</h2>

          {/* Close Button */}
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreTops.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative bg-gray-100 aspect-square mb-4 overflow-hidden">
                {item.isNew && (
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-semibold tracking-wider z-10">
                    NEW
                  </div>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-wide">
                  {item.name}
                </h3>
                <p className="text-sm font-semibold">
                  {formatPrice(item.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
