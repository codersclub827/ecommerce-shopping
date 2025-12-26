import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product list from backend API
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
      {products.map((p) => (
        <div key={p._id} style={{ border: "1px solid #ccc", padding: "10px" }}>
          {/* THIS IS THE CODE FOR THE IMAGE */}
          <img src={`http://localhost:5000${p.image}`} alt={p.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <h3>{p.name}</h3>
          <p>৳ {p.price}</p>
        </div>
      ))}
    </div>
  );
}
