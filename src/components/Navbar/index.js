import "./NavbarLayout.scss";
import config from "~/config";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="myNavbar">
      <div className="container">
        <Link className="render-link" to={config.routes.home}>
          Home
        </Link>
        <Link className="render-link" to={config.routes.products}>
          Products
        </Link>
        <div className="dropdown">
          <button>Categories</button>
          <div className="dropdown-content">
            <Link className="render-link">Model 1</Link>
            <Link className="render-link">Model 2</Link>
            <Link className="render-link">Model 3</Link>
          </div>
        </div>
        <Link className="render-link" to={config.routes.aboutUs}>
          About us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
