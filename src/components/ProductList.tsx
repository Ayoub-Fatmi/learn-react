import CartItem from "../types/CartItem";
import Product from "../types/Product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  cart?: CartItem[];
}

function ProductList({ products, onAddToCart, cart }: ProductListProps) {
  if (products.length === 0) {
    return <div className="text-center py-8">No products found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        data-testid="product-list-container"
      >
        {products.map((product) => {
          const cartItem = cart?.find(item => item.id === product.id);
          return (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              isInCart={!!cartItem}
              cartQuantity={cartItem?.quantity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;