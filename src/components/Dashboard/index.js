import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

import "./DashboardLY.scss";
import config from "~/config";
import { Admin, Staff } from "~/system/Constants/Constants";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer";
import Store from "~/modules/Store";
import Orders from "~/modules/Orders";
import AccountProfile from "~/modules/Accounts/AccountProfile";
import ChangePassword from "~/modules/Accounts/ChangePassword";
import { useUserAuth } from "~/context/UserAuthContext";

const { Content } = Layout;

const Dashboard = () => {
  const { getUser } = useUserAuth();
  const user = getUser();

  const renderRoutes = () => {
    // const commonRoutes = [
    //   <Route key={0} path={config.routes.default} element={<Store />} />,
    //   <Route
    //     key={1}
    //     path={config.dashboardRoutes.orderList}
    //     element={<Orders />}
    //   />,
    //   <Route
    //     key={2}
    //     path={config.dashboardRoutes.accountProfile}
    //     element={<AccountProfile />}
    //   />,
    //   <Route
    //     key={3}
    //     path={config.dashboardRoutes.changePassword}
    //     element={<ChangePassword />}
    //   />,
    //   <Route
    //     key={4}
    //     path={config.routes.other}
    //     element={<div>Page Not Found</div>}
    //   />,
    // ];

    if (user) {
      if (user.roleId === Staff) {
        return (
          <Routes>
            <Route key={0} path={config.routes.default} element={<Store />} />
            <Route
              key={1}
              path={config.dashboardRoutes.orderList}
              element={<Orders />}
            />
            <Route
              key={2}
              path={config.dashboardRoutes.accountProfile}
              element={<AccountProfile />}
            />
            <Route
              key={3}
              path={config.dashboardRoutes.changePassword}
              element={<ChangePassword />}
            />
            <Route
              key={4}
              path={config.routes.other}
              element={<div>Page Not Found</div>}
            />
          </Routes>
        );
      } else if (user.roleId === Admin) {
        return (
          <Routes>
            <Route key={0} path={config.routes.default} element={<Store />} />
            <Route
              key={1}
              path={config.dashboardRoutes.orderList}
              element={<Orders />}
            />
            <Route
              key={2}
              path={config.dashboardRoutes.accountProfile}
              element={<AccountProfile />}
            />
            <Route
              key={3}
              path={config.dashboardRoutes.changePassword}
              element={<ChangePassword />}
            />
            <Route
              key={4}
              path={config.routes.other}
              element={<div>Page Not Found</div>}
            />
          </Routes>
        );
      }
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content className="dashboard-layout my-4">{renderRoutes()}</Content>
        <div className="line"></div>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
