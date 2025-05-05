import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://eval-backend-lyart.vercel.app/api/products"
        );
        
        if (response.data.success) {
          setProducts(response.data.data);
        } else {
          setError("Failed to load products");
        }
      } catch (err) {
        setError("Error loading products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div>
        <h1>Products</h1>
        <div>
          {localStorage.getItem("token") ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>

      <div>
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          <div>
            {products.map((product) => (
              <div key={product._id}>
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <Link to={`/product/${product._id}`}>View Details</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
