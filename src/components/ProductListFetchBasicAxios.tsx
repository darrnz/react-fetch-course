import axios from "axios";
import { useState, useEffect } from "react";
import { ProductType } from "../types/products";
import { jsonUrl } from "../constants";
import ListComponent from "./ListComponent";

const ProductListAxios = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch products using Axios
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(jsonUrl);
      console.log("data --->", response.data);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching products - " + error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List (Axios)</h1>
      <div>
        <ListComponent products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default ProductListAxios;
