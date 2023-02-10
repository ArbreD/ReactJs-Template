const routes = {
  default: "/",
  other: "/*",
  login: "/login",
  register: "/registration",
  dashboard: "/dashboard",
  home: "/dashboard/home",
  products: "/dashboard/products",
  aboutUs: "/dashboard/aboutUs",
};

const dashboardRoutes = {
  dashbard: "/dashboard/*",
  home: "/home",
  products: "/products",
  aboutUs: "/aboutUs",
};

export { routes, dashboardRoutes };
