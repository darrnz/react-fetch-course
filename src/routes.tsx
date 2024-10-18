import { createBrowserRouter } from "react-router-dom";
import ProductListCallback from "./components/ProductListFetchButton";
import ProductListFetch from "./components/ProductListFetch";
import ProductListFetchWithPost from "./components/ProductListFetchWithPost";
import ProductListButton from "./components/ProductListFetchButton";
import path from "path";
import ProductListAxios from "./components/ProductListFetchBasicAxios";
import ProductListWithCategory from "./components/ProductListFetchPostAxios";

const routes = [
  {
    path: "/",
    element: <ProductListFetch />,
  },
  { path: "/products-fetch-post", element: <ProductListFetchWithPost /> },
  { path: "/products-fetch-callback", element: <ProductListButton /> },
  { path: "/products-axios-basic", element: <ProductListAxios /> },
  { path: "/products-axios-post", element: <ProductListWithCategory /> },
  { path: "*", element: <h1>Not Found</h1> },
];

export default routes;
