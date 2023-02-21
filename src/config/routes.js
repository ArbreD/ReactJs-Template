const routes = {
  default: "/",
  other: "/*",
  login: "/login",
  dashboard: "/dashboard",
  orderList: "/dashboard/order-list",
  accountProfile: "/dashboard/account-profile",
  changePassword: "/dashboard/change-password",
};

const dashboardRoutes = {
  dashbard: "/dashboard/*",
  orderList: "/order-list",
  accountProfile: "/account-profile",
  changePassword: "/change-password",
};

export { routes, dashboardRoutes };
