import "./HeaderLayout.scss";
import { useUserAuth } from "~/context/UserAuthContext";

function Header() {
  const { getUser, logOut } = useUserAuth();
  const user = getUser();

  return (
    <div className="header-flex">
      <h1>Header</h1>
      {user ? <button onClick={logOut}>Sign out</button> : <span></span>}
    </div>
  );
}

export default Header;
