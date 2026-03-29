import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="navbar">
      <h2>NeoCart ⚡</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <DarkModeToggle />
      </div>
    </div>
  );
}