import { useCart } from "../context/CartContext";

function ProductsPage() {
    const { addToCart } = useCart();
    const {
        data: products,
        isLoading,
        error,
        refetch,
      } = useFetch<Product[]>("http://localhost:3000/products");
      
    return (
        <div>
            <h1>Products Page</h1>
        </div>
    );
}    
export default ProductsPage;