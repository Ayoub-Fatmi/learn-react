import { Link } from "react-router-dom";

interface OrderSummaryProps {
  totalPrice: number;
}

function OrderSummary({ totalPrice }: OrderSummaryProps) {
  return (
    <div className="lg:w-1/3">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <button className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition mt-4">
            Proceed to Checkout
          </button>
          
          <Link to="/">
            <button className="w-full py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;