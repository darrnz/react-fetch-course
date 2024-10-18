import { useState } from "react";
import axios from "axios";
import { ProductType } from "../../types/products";
import { jsonUrl } from "../../constants";
import { generateRandomStringId } from "../../utils/helpers";

const useProductAPI = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to add a product
  const addProduct = async (newProduct: ProductType) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${jsonUrl}`, {
        ...newProduct,
        id: generateRandomStringId(),
      });
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError("Error adding product: " + err);
    }
  };

  // Function to delete a product by ID
  const deleteProduct = async (productId: string) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${jsonUrl}/${productId}`);
      setLoading(false);
      return productId;
    } catch (err) {
      setLoading(false);
      setError("Error deleting product: " + err);
    }
  };

  return { addProduct, deleteProduct, loading, error };
};

export default useProductAPI;
