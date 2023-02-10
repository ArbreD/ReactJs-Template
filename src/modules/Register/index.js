import { Link } from "react-router-dom";
import { useState } from "react";

import config from "~/config";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && confirm) {
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
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
        <label htmlFor="login-confirm">Password</label>
        <input
          id="login-confirm"
          type="password"
          placeholder="Enter password again"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
      <div>
        <span>Already have an account?</span>
        <Link id="a-login" to={config.routes.login}>
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default Register;
