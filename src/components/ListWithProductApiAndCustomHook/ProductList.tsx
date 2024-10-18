import { useState, useEffect } from "react";
import axios from "axios";
import { ProductType } from "../../types/products";
import useProductAPI from "./useProductApi";
import { jsonUrl } from "../../constants";
import ListComponent from "../ListComponent";

const ProductListWithProductAPI = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [newProduct, setNewProduct] = useState<ProductType>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    category: "",
    inStock: false,
  });

  const { addProduct, deleteProduct, loading, error } = useProductAPI();

  // Fetch products on component mount
  const fetchProducts = async () => {
    try {
      const response = await axios.get(jsonUrl);
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form submission to add a new product
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const addedProduct = await addProduct(newProduct);
    if (addedProduct) {
      setProducts((prev) => [...prev, addedProduct]); // Add the new product to the list
      setNewProduct({
        id: 0,
        name: "",
        description: "",
        price: 0,
        category: "",
        inStock: false,
      }); // Reset form
    }
  };

  // Handle deleting a product
  const handleDelete = async (productId: string) => {
    console.log("Deleting product with ID:", productId);
    const deletedId = await deleteProduct(productId);
    if (deletedId) {
      setProducts((prev) => prev.filter((product) => product.id !== deletedId)); // Remove from the list
    }
  };

  // Handle input changes for the form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Manage Products</h2>

      {/* Display error and loading state */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}

      {/* Form to add a product */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {/* Display the list of products with delete option */}
      <h3>Product List</h3>
      <div>
        <ListComponent products={products} loading={loading} error={error} deleteProductFunc={handleDelete} />
      </div>
    </div>
  );
};

export default ProductListWithProductAPI;
