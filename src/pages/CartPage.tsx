import { useCart } from "../context/CartContext";

function CartPage() {
    const { cart } = useCart();

    return (
        <div>
            <h2>Cart</h2>
        </div>
    );
}  

export default CartPage;