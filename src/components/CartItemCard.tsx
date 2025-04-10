import CartItem  from "../types/CartItem";

interface CartItemProps {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

function CartItemCard({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  return (
    <div className="grid grid-cols-12 p-4 border-b items-center">
      {/* Product Info */}
      <div className="col-span-12 md:col-span-5 flex items-center space-x-4">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-gray-500 text-sm">{item.category}</p>
        </div>
      </div>

      {/* Price */}
      <div className="col-span-4 md:col-span-2 mt-4 md:mt-0">
        <span className="md:hidden font-medium mr-2">Price:</span>
        <span>${item.price.toFixed(2)}</span>
      </div>

      {/* Quantity */}
      <div className="col-span-4 md:col-span-3 mt-4 md:mt-0">
        <span className="md:hidden font-medium mr-2">Qty:</span>
        <div className="flex items-center justify-center space-x-2">
          <button 
            onClick={onDecrease}
            className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            onClick={onIncrease}
            className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
          >
            +
          </button>
          <button 
            onClick={onRemove}
            className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="col-span-4 md:col-span-2 mt-4 md:mt-0 text-right">
        <span className="md:hidden font-medium mr-2">Subtotal:</span>
        <span className="font-medium">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default CartItemCard;