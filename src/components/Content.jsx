import { useState, useEffect } from "react";
import './Content.css'
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL

function Content() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
        const url = `${API_URL}/store`;
        const res = await axios.get(url);
        setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
        <div className="row">
            {products.map((product) => (
                <div className="box">
                    <img src={`${API_URL}/${product.imageUrl}`} width='300px' alt="product image" />
                    <h3>{product.name}</h3>
                    <p>{product.desc}</p>
                    <h4>{product.price}</h4>
                    <p><button>Add to Cart</button></p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Content;