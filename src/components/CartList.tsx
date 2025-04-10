import { useCart } from "../context/CartContext";
import CartItem  from "../types/CartItem";
import CartItemCard from "./CartItemCard";

interface CartListProps {
  cart: CartItem[];
}

function CartList({ cart }: CartListProps) {
    const { changeQuantity } = useCart();
  return (
    <div className="lg:w-2/3">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700">
          <div className="col-span-4">Product</div>
          <div className="col-span-3 text-center">Price</div>
          <div className="col-span-3 text-center">Quantity</div>
          <div className="col-span-2 text-right">Subtotal</div>
        </div>
        
        {cart.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            onIncrease={() => changeQuantity(item.id, "increase")}
            onDecrease={() => changeQuantity(item.id, "decrease")}
            onRemove={() => changeQuantity(item.id, "remove")}
          />
        ))}
      </div>
    </div>
  );
}

export default CartList;