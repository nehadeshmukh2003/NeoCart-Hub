export default function ProductCard({ product, addToCart }) {

  // ✅ STOP ERROR HERE
  if (!product || !product.image) {
    return null;
  }

  return (
    <div className="card">
      <img 
        src={product.image || "https://via.placeholder.com/150"} 
        alt=""
      />
      <h4>{product.title?.slice(0, 20)}</h4>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add</button>
    </div>
  );
}