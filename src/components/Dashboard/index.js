import { Routes, Route, Outlet } from "react-router-dom";

import config from "~/config";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer";
import Guard from "~/components/Guard";
import Home from "~/modules/Home";
import Products from "~/modules/Products";
import AboutUs from "~/modules/AboutUs";

const Dashboard = () => {
  return (
    <Routes>
      <Route
        element={
          <div>
            <Header />
            <Navbar />
            <div className="container">
              <div className="row">
                <div className="col-2 d-none d-md-block">
                  <Sidebar />
                </div>
                <div className="col-10">
                  <Outlet />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        }
      >
        <Route path={config.routes.default} element={<Home />} />
        <Route path={config.dashboardRoutes.home} element={<Home />} />
        <Route path={config.dashboardRoutes.products} element={<Products />} />
        <Route
          path={config.dashboardRoutes.aboutUs}
          element={
            <Guard>
              <AboutUs />
            </Guard>
          }
        />
        <Route path={config.routes.other} element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
