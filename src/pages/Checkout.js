import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div>
      <h2>Checkout</h2>
      <Link to="/summary"><button>Place Order</button></Link>
    </div>
  );
}