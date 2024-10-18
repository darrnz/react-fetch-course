import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLinkStyle = (isActive: boolean) => {
    return {
      color: isActive ? "white" : "blue",
    };
  };
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          margin: "10px",
          fontSize: "0.9rem",
          borderBottom: "1px solid #ccc",
        }}
      >
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => activeLinkStyle(isActive)}
            to="/products-fetch-post"
          >
            Products Fetch Post
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => activeLinkStyle(isActive)}
            to="/products-fetch-callback"
          >
            Products Fetch Callback
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => activeLinkStyle(isActive)}
            to="/products-axios-basic"
          >
            Products Axios Basic
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => activeLinkStyle(isActive)}
            to="/products-axios-post"
          >
            Products Axios Post
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => activeLinkStyle(isActive)}
            to="/products-product-api"
          >
            Products Product API
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => activeLinkStyle(isActive)}
            to="/products-api-call-hook"
          >
            Products API Call Hook
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
