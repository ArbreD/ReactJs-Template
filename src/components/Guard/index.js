import { Navigate } from "react-router-dom";

import config from "~/config";
import { useUserAuth } from "~/context/UserAuthContext";

const Guard = (props) => {
  const { getUser } = useUserAuth();
  const user = getUser();

  if (!user) {
    return <Navigate to={config.routes.login} />;
  }

  return <div>{props.children}</div>;
};

export default Guard;
