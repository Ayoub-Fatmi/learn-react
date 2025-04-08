import { useState } from "react";
import Product from "./types/Product";
import CartItem from "./types/CartItem";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mockProducts : Product[] = [
  {
    "id": "1",
    "name": "React T-Shirt",
    "description": "Show your love for React with this comfy tee.Show your love for React with this comfy tee.Show your love for React with this comfy tee.Show your love for React with this comfy tee.Show your love for React with this comfy tee.",
    "price": 24.99,
    "imageUrl": "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C61jhvWSmZ1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png"
  },
  {
    "id": "2",
    "name": "Vue T-Shirt",
    "description": "A stylish shirt for Vue enthusiasts.",
    "price": 22.99,
    "imageUrl": "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C81hy-ZbLBZL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png"
  },
  {
    "id": "3",
    "name": "Angular T-Shirt",
    "description": "Represent the Angular framework.",
    "price": 23.99,
    "imageUrl": "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C61zU1gMSrBL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png"
  },
  {
    "id": "4",
    "name": "JavaScript Mug",
    "description": "Start your day with coffee and JavaScript.",
    "price": 15.5,
    "imageUrl": "https://m.media-amazon.com/images/I/51H-6tGpGKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "id": "5",
    "name": "Node.js Hoodie",
    "description": "Stay warm and code with this Node.js hoodie.",
    "price": 45.0,
    "imageUrl": "https://m.media-amazon.com/images/I/C1q2gsVPHWL._CLa%7C2140%2C2000%7C71408n2HbqL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png"
  },
  {
    "id": "6",
    "name": "CSS Sticker Pack",
    "description": "Decorate your laptop with these CSS stickers.",
    "price": 9.99,
    "imageUrl": "https://m.media-amazon.com/images/I/61fHbfQpq-L._AC_SL1500_.jpg"
  }]

function App() {
  const notify = (productName: string, exists: boolean, quantity?: number) => exists ?  toast.info("You now have " + quantity + " " + productName + " in cart") :  toast.success(productName + " - Added to cart successfully!");

  const [products] = useState<Product[]>(mockProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const handleAddToCart = (product : Product)=>{
    const existingIndex = cart.findIndex( (item) => item.id === product.id); 
    if(existingIndex === -1){
      setCart([...cart, { ...product, quantity: 1 }]);
      setCartCount(cartCount + 1);
      notify(product.name, false);
      
    }else{
      cart[existingIndex].quantity += 1;
      setCart(cart);
      setCartCount(cartCount + 1);
      notify(product.name, true, cart[existingIndex].quantity);
    }
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header cartCount={cartCount} />
      <main className=" mx-auto container flex-grow">
        <ProductList products={products} onAddToCart={(product) => handleAddToCart(product)} cart={cart} />
          <ToastContainer position="bottom-right"/>
      </main>
    </div>
  );
}

export default App;
