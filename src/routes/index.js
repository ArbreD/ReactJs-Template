import { Routes, Route, Navigate } from "react-router-dom";

import config from "~/config";
import Login from "~/modules/Login";
import Dashboard from "~/components/Dashboard";
import Guard from "~/components/Guard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={config.routes.default}
        element={<Navigate to={config.routes.dashboard} />}
      />
      <Route
        path={config.dashboardRoutes.dashbard}
        element={
          <Guard>
            <Dashboard />
          </Guard>
        }
      />
      <Route path={config.routes.login} element={<Login />} />
      <Route path={config.routes.other} element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
