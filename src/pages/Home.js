import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <h2>Loading products...</h2>;
  }

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered
          .filter(p => p && p.image)
          .map(p => (
            <div className="card" key={p.id}>
              <img src={p.image || "https://via.placeholder.com/150"} alt="" />
              <h4>{p.title?.slice(0, 20)}</h4>
              <p>₹{p.price}</p>
              <button onClick={() => addToCart(p)}>Add</button>
            </div>
          ))}
      </div>
    </>
  );
}