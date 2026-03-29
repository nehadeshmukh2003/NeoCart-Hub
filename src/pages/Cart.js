import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, changeQty, removeItem } = useContext(CartContext);

  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <div className="cart-container">
      <Link to="/" className="back-btn">⬅ Continue Shopping</Link>

      <h2>🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <h3 className="empty">Your cart is empty 😢</h3>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className="product-info">
                    <img src={item.image} alt="" />
                    <span>{item.title}</span>
                  </td>

                  <td>₹{item.price}</td>

                  <td>
                    <button onClick={() => changeQty(item.id, -1)}>-</button>
                    <span className="qty">{item.qty}</span>
                    <button onClick={() => changeQty(item.id, 1)}>+</button>
                  </td>

                  <td>₹{item.price * item.qty}</td>

                  <td>
                    <button onClick={() => removeItem(item.id)}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>Total Amount: ₹{total}</h3>

            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}