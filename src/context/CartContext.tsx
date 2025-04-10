import { createContext, useContext, useState, ReactNode } from "react";
import Product from "../types/Product";
import { toast } from "react-toastify";
import CartItem from "../types/CartItem";

// Define the shape of your context
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  cartCount: number;
  changeQuantity: (id: string, type: string) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const notify = (productName: string, exists: boolean, quantity?: number) =>
    exists
      ? toast.info("You now have " + quantity + " " + productName + " in cart")
      : toast.success(productName + " - Added to cart successfully!");

  const [cartCount, setCartCount] = useState<number>(0);

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    // Add to cart implementation
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
      setCartCount(cartCount + 1);
      notify(product.name, false);
    } else {
      cart[existingIndex].quantity += 1;
      setCart(cart);
      setCartCount(cartCount + 1);
      notify(product.name, true, cart[existingIndex].quantity);
      
    }
  };

  const changeQuantity = (id: string, type: string) => {
    const existingIndex = cart.findIndex((item) => item.id === id);
    if (existingIndex !== -1) {
      if (type === "remove") {
        setCartCount(cartCount - cart[existingIndex].quantity);
        cart.splice(existingIndex, 1);
        setCart(cart);
      } else if (type === "increase") {
        cart[existingIndex].quantity += 1;
        setCart(cart);
        setCartCount(cartCount + 1);
      } else if (type === "decrease") {
        if (cart[existingIndex].quantity > 1) {
          cart[existingIndex].quantity -= 1;
          setCart(cart);
          setCartCount(cartCount - 1);
        }else if(cart[existingIndex].quantity === 1){
          setCartCount(cartCount - cart[existingIndex].quantity);
          cart.splice(existingIndex, 1);
          setCart(cart);
        }
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount, changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

// Create a custom hook for using the context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
