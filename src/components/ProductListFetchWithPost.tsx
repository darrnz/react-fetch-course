import { useCallback, useEffect, useState } from "react";
import { ProductType } from "../types/products";
import { jsonUrl } from "../constants";
import ListComponent from "./ListComponent";
import { generateRandomStringId } from "../utils/helpers";

const ProductListFetchWithPost = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState<ProductType>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    category: "",
    inStock: false,
  });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://supreme-computing-machine-55qrpx5p74w27j9q-3000.app.github.dev/products"
      );
      const data = await response.json();
      console.log("data --->", { data, response });
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching products - " + error);
      setLoading(false);
    }
  };

  const addProduct = async () => {
    try {
      const response = await fetch(jsonUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newProduct, id: generateRandomStringId() }),
      });
      const data = await response.json();
      console.log("data --->", { data, response });
      fetchProducts();
    } catch (error) {
      setError("Error adding product - " + error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products --->", products);

  return (
    <div>
      <h1>Product List</h1>
      <section>
        {" "}
        <h2>Add a New Product</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addProduct();
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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
          <button type="submit">Add Product</button>
        </form>
      </section>
      <section>
        <div>
          <ListComponent products={products} loading={loading} error={error} />
        </div>
      </section>
    </div>
  );
};

export default ProductListFetchWithPost;
