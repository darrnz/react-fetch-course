import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products-fetch-post">Products Fetch Post</Link>
        </li>
        <li>
          <Link to="/products-fetch-callback">Products Fetch Callback</Link>
        </li>
        <li>
          <Link to="/products-axios-basic">Products Axios Basic</Link>
        </li>
        <li>
          <Link to="/products-axios-post">Products Axios Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
