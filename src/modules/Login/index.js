import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import config from "~/config";
import { useUserAuth } from "~/context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginWithEmail } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const user = await loginWithEmail(email, password);
      if (user) {
        console.log("user: " + user);
        navigate(config.routes.dashboard);
      }
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Link to={config.routes.dashboard}>
        <span>&lt; Go back</span>
      </Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
      <div>
        <span>No account yet?</span>
        <Link id="a-register" to={config.routes.register}>
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;
