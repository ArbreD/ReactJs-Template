const routes = {
  default: "/",
  other: "/*",
  login: "/login",
  dashboard: "/dashboard",
  orderList: "/dashboard/order-list",
  accountProfile: "/dashboard/account-profile",
  changePassword: "/dashboard/change-password",
  viewCategoryList: "/dashboard/category-list",
  addCategory: "/dashboard/add-category",
  viewProductList: "/dashboard/product-list",
  addProduct: "/dashboard/add-product",
};

const dashboardRoutes = {
  dashbard: "/dashboard/*",
  orderList: "/order-list",
  accountProfile: "/account-profile",
  changePassword: "/change-password",
  viewCategoryList: "/category-list",
  addCategory: "/add-category",
  viewProductList: "/product-list",
  addProduct: "/add-product",
};

export { routes, dashboardRoutes };
