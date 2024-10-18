import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductType } from "../types/products";
import { jsonUrl } from "../constants";
import ListComponent from "./ListComponent";

const ProductListWithCategory = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");

  const fetchProducts = async (category: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${jsonUrl}?category=${category}`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching products - " + error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
  };

  return (
    <div>
      <h1>Product List: {category}</h1>

      <select value={category} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Wearables">Wearables</option>
      </select>

      <div>
        <ListComponent products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default ProductListWithCategory;
