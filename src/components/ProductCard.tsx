import { useState } from "react";
import Product from "../types/Product";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart?: boolean;
  cartQuantity?: number;
}
const categoryStyles : Record<string, string> = {
  "T-Shirts": "bg-blue-500",
  "Hoodies": "bg-purple-500",
  "Accessories": "bg-yellow-500",
  "Headwear": "bg-red-500",
};

function ProductCard({
  product,
  onAddToCart,
  isInCart,
  cartQuantity,
}: ProductCardProps) {
  const { changeQuantity } = useCart();

  console.log(product.category);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxDescriptionLength = 80;

  const truncatedDescription =
    product.description.length > maxDescriptionLength
      ? `${product.description.substring(0, maxDescriptionLength)}...`
      : product.description;

  return (
    <div
      className={`relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-shadow duration-300 `}
    >
      {showFullDescription && (
        <div
          className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10 cursor-pointer"
          onClick={() => setShowFullDescription(false)}
          title="Close description"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[90%] max-h-[80%] overflow-auto">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      )}

      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-contain hover:scale-120 transition-transform duration-300"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <div className="min-h-[60px]">
          <p className="text-gray-600 mb-2">
            <button
              onClick={() => setShowFullDescription(true)}
              className="text-left w-full"
              title="Show full description"
            >
              {truncatedDescription}
            </button>
          </p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          <div className={`py-1 px-2 rounded-full text-white text-xs font-medium ${
            categoryStyles[product.category] || "bg-gray-500"
          }`}>
            {product.category || "No Category"}
          </div>
        </div>

        <button
          onClick={() => !isInCart && onAddToCart(product)}
          className={`flex items-center justify-center gap-2 w-full py-2 px-4 rounded transition-colors ${
            isInCart
              ? "border-2 border-green-500 bg-green-50 hover:bg-green-100 text-green-800"
              : "border-2 border-indigo-600 bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          {isInCart ? (
            <div className="flex items-center gap-3 w-full justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    changeQuantity(product.id, "decrease");
                  }}
                  className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-600"
                  title="Remove 1 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>

                <span className="font-medium">{cartQuantity}</span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    changeQuantity(product.id, "increase");
                  }}
                  className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-600"
                  title="Add 1 more"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>

              <span className="text-sm">In Cart</span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  changeQuantity(product.id, "remove");
                }}
                className="text-red-500 hover:text-red-700"
                title="Remove from cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
