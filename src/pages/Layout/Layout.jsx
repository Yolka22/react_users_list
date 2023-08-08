import { Outlet, Link } from "react-router-dom";
import "./layoutstyle.css";
const Layout = () => {
  return (
    <>
      <nav>
          <Link to="/" className="navelement">Home</Link>
          <Link to="/news" className="navelement">News</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
