import { useState } from "react";
import Product from "../types/Product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart?: boolean;
  cartQuantity?: number;
}

function ProductCard({
  product,
  onAddToCart,
  isInCart,
  cartQuantity,
}: ProductCardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxDescriptionLength = 50;

  const truncatedDescription =
    product.description.length > maxDescriptionLength
      ? `${product.description.substring(0, maxDescriptionLength)}...`
      : product.description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-shadow duration-300">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-contain hover:scale-120 transition-transform duration-300"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <div className="min-h-[60px]">
          <p className="text-gray-600 mb-2 ">
            {showFullDescription ? <button onClick={() => setShowFullDescription(false)}>{product.description}</button> : <button  onClick={() => setShowFullDescription(true)}>{truncatedDescription}</button>  }
          </p>
        </div>

        <div className="flex justify-between gap-5">
          <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>

          <button
            onClick={() => onAddToCart(product)}
            className={`flex items-center justify-center gap-2 w-full py-2 px-4 rounded transition-colors ${isInCart
                ? "bg-green-500 hover:bg-green-700 text-white cursor-default"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
          >
            {isInCart ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {cartQuantity ? `${cartQuantity} in cart • Click to add +1` : "Add to Cart"}
                </>
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
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
