import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductType } from '../types/products';
import { jsonUrl } from '../constants';

const ProductListWithCategory = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<string>('all'); // The selected category

  // Fetch products by category
  const fetchProducts = async (category: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${jsonUrl}?category=${category}`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching products - ' + error);
      setLoading(false);
    }
  };

  // useEffect to refetch products when 'category' changes
  useEffect(() => {
    fetchProducts(category); // Refetch products whenever the category changes
  }, [category]); // 'category' is the dependency, so useEffect runs when it changes

  // Handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value); // Update the category
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h1>Product List</h1>

      {/* Dropdown to select category */}
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
      </select>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListWithCategory;
