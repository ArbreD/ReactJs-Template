import { Routes, Route } from "react-router-dom";

import config from "~/config";
import Dashboard from "~/components/Dashboard";
import Login from "~/modules/Login";
import Register from "~/modules/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={config.routes.default} element={<Dashboard />} />
      <Route path={config.dashboardRoutes.dashbard} element={<Dashboard />} />
      <Route path={config.routes.login} element={<Login />} />
      <Route path={config.routes.register} element={<Register />} />
      <Route path={config.routes.other} element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
