import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartList from "../components/CartList";
import OrderSummary from "../components/OrderSummary";

function CartPage() {
  const { cart, cartCount } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {cartCount === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <Link to="/">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <CartList
            cart={cart}
          />
          <OrderSummary totalPrice={totalPrice} />
        </div>
      )}
    </div>
  );
}

export default CartPage;