import React, { useEffect, useState } from 'react';
import ListComponent from '../ListComponent';
import useProducts from './services/useProductServices';
import { ProductType } from '../../types/products';

const ProductManager: React.FC = () => {
  const { products, fetchAllProducts, loading, error, addNewProduct, deleteProduct } = useProducts();
  const [newProduct, setNewProduct] = useState<ProductType>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    category: '',
    inStock: false,
  });

  // Handle form submission to add a new product
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNewProduct(newProduct);
    setNewProduct({ id: 0, name: '', description: '', price: 0, category: '', inStock: false }); // Reset form
  };

  // Handle deleting a product
  const handleDelete = (productId: string) => {
    deleteProduct(productId);
  };

  // Handle input changes for the form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchAllProducts();
  },[]) 

  return (
    <div>
      <h2>Manage Products</h2>

      {/* Display error and loading state */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading...</p>}

      {/* Form to add a product */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </form>

      {/* Display the list of products with delete option */}
      <h3>Product List</h3>
      <div><ListComponent error={error} loading={loading} products={products} deleteProductFunc={handleDelete} /></div>
    </div>
  );
};

export default ProductManager;
