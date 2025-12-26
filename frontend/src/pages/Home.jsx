import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((p) => (
        <div key={p._id}>
          <img
            src={`http://localhost:5000${p.image}`}
            width="150"
          />
          <h3>{p.name}</h3>
          <p>৳ {p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
