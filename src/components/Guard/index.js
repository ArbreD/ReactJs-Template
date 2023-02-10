import { Navigate } from "react-router-dom";

import config from "~/config";
import { useUserAuth } from "~/context/UserAuthContext";

const Guard = (props) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to={config.routes.login} replace={true} />;
  }
  return <div>{props.children}</div>;
};

export default Guard;
