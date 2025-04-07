import { useState } from 'react';
import Product from '../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
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
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">
          {showFullDescription ? product.description : truncatedDescription}
        </p>
        
        {product.description.length > maxDescriptionLength && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mb-4"
          >
            {showFullDescription ? 'Show less' : 'Read more'}
          </button>
        )}
        
        <div className='flex justify-between gap-5'>
            <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
            <button
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
            >
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
            </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;