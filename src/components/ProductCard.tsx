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
    <div
      className={`relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-shadow duration-300 `}
    >
      {showFullDescription && (
        <div
          className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10"
          onClick={() => setShowFullDescription(false)} 
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-[90%] max-h-[80%] overflow-auto"
          >
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
            >
              {truncatedDescription}
            </button>
          </p>
        </div>

        {/* <div className="flex justify-between"> */}
          <p className="right-0 text-lg font-bold mb-4">${product.price.toFixed(2)}</p>

          <button
            onClick={() => onAddToCart(product)}
            className={`flex items-center justify-center gap-2 w-full py-2 px-4 rounded transition-colors ${
              isInCart
                ? " border-2 border-green-500 bg-green-500 hover:bg-green-600 text-white cursor-default"
                : "border-2 border-indigo-600 bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          > 
            {isInCart ? (
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                {cartQuantity ? `Quantity:  ${cartQuantity} • add 1 to cart` : "Add to Cart"}
              </div>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                Add to Cart
              </>
            )}
          </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ProductCard;