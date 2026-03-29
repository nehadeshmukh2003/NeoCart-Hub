import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSummary from "./pages/OrderSummary";
import { CartProvider } from "./context/CartContext";
import "./style.css";

function App() {
  return (
    <CartProvider>   {/* ✅ VERY IMPORTANT */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/summary" element={<OrderSummary />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;