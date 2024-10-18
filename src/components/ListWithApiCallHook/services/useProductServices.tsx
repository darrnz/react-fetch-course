import { useState } from "react";
import useApiCall from "../hooks/useApiCall";
import { ProductType } from "../../../types/products";
import { jsonUrl } from "../../../constants";
import { generateRandomStringId } from "../../../utils/helpers";

const useProducts = () => {
  const { apiCall, loading, error } = useApiCall<ProductType[]>();
  const [products, setProducts] = useState<ProductType[]>([]);

  // Fetch all products
  const fetchAllProducts = async () => {
    const productList = await apiCall({
      url: jsonUrl,
      method: "GET",
    });
    if (productList) {
      console.log("productList --->", productList);
      setProducts(productList);
    }
  };

  // Add a new product
  const addNewProduct = async (newProduct: ProductType) => {
    const addedProduct = await apiCall({
      url: jsonUrl,
      method: "POST",
      data: { newProduct, id: generateRandomStringId() },
    });
    if (addedProduct) {
      setProducts((prev) => [...prev, ...addedProduct]);
    }
  };

  // Delete a product
  const deleteProduct = async (productId: string) => {
    await apiCall({
      url: `${jsonUrl}/${productId}`,
      method: "DELETE",
    });
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  return {
    products,
    loading,
    error,
    fetchAllProducts,
    addNewProduct,
    deleteProduct,
  };
};

export default useProducts;
