import { useCallback, useEffect, useState } from "react";
import { ProductType } from "../types/products";
import { jsonUrl } from "../constants";
import ListComponent from "./ListComponent";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(jsonUrl, {
        // mode: 'no-cors',
      });
      const data = await response.json();
      console.log("data --->", { data, response });
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching products - " + error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products --->", products);

  return (
    <div>
      <h1>Product List</h1>
      <section>
        <div>
          <ListComponent products={products} loading={loading} error={error} />
        </div>
      </section>
    </div>
  );
};

export default ProductList;
