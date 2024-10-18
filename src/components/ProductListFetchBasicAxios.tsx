import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductType } from '../types/products';
import { jsonUrl } from '../constants';

const ProductListAxios = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch products using Axios
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(jsonUrl);
      console.log('data --->', response.data);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching products - ' + error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h1>Product List (Axios)</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListAxios;
