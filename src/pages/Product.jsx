import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://eval-backend-lyart.vercel.app/api/products/${id}`
        );
        
        if (response.data.success) {
          setProduct(response.data.data);
        } else {
          setError("Failed to load product details");
        }
      } catch (err) {
        setError("Error loading product details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Link to="/products">Back to Products</Link>
      <div>
        <h1>{product.name}</h1>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Quantity in Stock:</strong> {product.quantity}</p>
      </div>
    </div>
  );
};

export default Product;
