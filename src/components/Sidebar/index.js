import { Link } from "react-router-dom";
import { Layout, Button, Menu } from "antd";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faStore,
  faClipboardCheck,
  faUser,
  faFeather,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

import "./SidebarLayout.scss";
import config from "~/config";
import { getLastPath } from "~/common/Helper";
import { useUserAuth } from "~/context/UserAuthContext";
import { Admin } from "~/system/Constants/Constants";
import { menuKeys } from "~/system/Constants/AppKeys";

const { Sider } = Layout;

function getItem(key, icon, label, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function Sidebar() {
  const { getUser, logOut } = useUserAuth();
  const user = getUser();
  const [key, setKey] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const newKey = getLastPath(window.location.href);
    console.log(newKey);
    setKey(newKey);
  });

  const handleClick = (e) => {
    setKey(e.key);
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleLogOut = () => {
    setTimeout(() => {
      logOut();
    }, 500);
  };

  const renderMenuForAdmin = () => {
    const menuItems = [
      getItem(
        `${menuKeys.dashboard}`,
        <FontAwesomeIcon icon={faStore} />,
        <Link to={config.routes.dashboard}>Cửa hàng</Link>
      ),
      getItem(
        `${menuKeys.orderList}`,
        <FontAwesomeIcon icon={faClipboardCheck} />,
        <Link to={config.routes.orderList}>Đơn hàng</Link>
      ),
      getItem("product", <FontAwesomeIcon icon={faFeather} />, "Sản phẩm", [
        getItem(
          `${menuKeys.viewProductList}`,
          null,
          <Link to={config.routes.viewProductList}>Danh sách sản phẩm</Link>
        ),
        getItem(
          `${menuKeys.addProduct}`,
          null,
          <Link to={config.routes.addProduct}>Tạo sản phẩm</Link>
        ),
      ]),
      getItem("category", <FontAwesomeIcon icon={faFilter} />, "Phân loại", [
        getItem(
          `${menuKeys.viewCategoryList}`,
          null,
          <Link to={config.routes.viewCategoryList}>Danh sách loại hàng</Link>
        ),
        getItem(
          `${menuKeys.addCategory}`,
          null,
          <Link to={config.routes.addCategory}>Tạo loại hàng</Link>
        ),
      ]),
      getItem("account", <FontAwesomeIcon icon={faUser} />, "Tài khoản", [
        getItem(
          `${menuKeys.accountProfile}`,
          null,
          <Link to={config.routes.accountProfile}>Hồ sơ tài khoản</Link>
        ),
        getItem(
          `${menuKeys.changePassword}`,
          null,
          <Link to={config.routes.changePassword}>Thay đổi mật khẩu</Link>
        ),
      ]),
      {
        type: "divider",
      },
      getItem(
        "logOut",
        <FontAwesomeIcon
          className="logOut-icon"
          icon={faArrowRightFromBracket}
        />,
        <Button type="link" onClick={handleLogOut} danger>
          Đăng xuất
        </Button>
      ),
    ];
    return (
      <Menu
        theme="light"
        className="main-menu"
        items={menuItems}
        mode="inline"
        selectedKeys={[key]}
        selectable={true}
        onClick={handleClick}
      />
    );
  };

  const renderMenuForStaff = () => {};

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
      <div className="text-center">
        <h2 style={{ color: "white" }}>Store</h2>
      </div>
      {user?.roleId === Admin ? renderMenuForAdmin() : renderMenuForStaff()}
    </Sider>
  );
}

export default Sidebar;
