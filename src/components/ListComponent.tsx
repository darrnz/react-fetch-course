import { ProductType } from "../types/products";

export interface ListComponentProps {
  loading: boolean;
  error: string | null;
  products: ProductType[];
  deleteProductFunc?: ((productId: string) => Promise<void>) | ((productId: string) => void);
}

const ListComponent: React.FC<ListComponentProps> = ({
  loading,
  error,
  products,
  deleteProductFunc,
}) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  console.log("products --->", products);
  return (
    <>
      <div style={{}}>
        {products &&
          products.map((product) => (
            <div key={product.id} style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                margin: "10px",
                borderBottom: "1px solid #ccc",
            }}>
              <p>
                {product.name} - ${product.price}
              </p>
              {deleteProductFunc && (
                <button
                    style={{
                        alignItems: "center",
                        height: "30px",
                        marginLeft: "30px",
                        padding: "5px",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                  onClick={() =>
                    deleteProductFunc && deleteProductFunc(product.id.toString())
                  }
                >
                  Delete
                </button>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default ListComponent;
