import { ProductType } from "../types/products";

export interface ListComponentProps {
  loading: boolean;
  error: string | null;
  products: ProductType[];
}

const ListComponent: React.FC<ListComponentProps> = ({
  loading,
  error,
  products,
}) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <>
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ListComponent;
