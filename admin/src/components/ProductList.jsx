import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {products.map((p) => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <img
            src={`http://localhost:5000${p.image}`}
            width="200"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
