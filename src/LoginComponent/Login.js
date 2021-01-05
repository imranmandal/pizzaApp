import React from "react";

import Button from "../ButtonComponent/Button";

import Register from "../RegisterComponent/Register";

const isRegistered = false;

function Login() {
  return isRegistered ? (
    <div className="form">
      <form>
        <input type="text" name="uname" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <Button btnName="Login" />
      </form>
    </div>
  ) : (
    <Register />
  );
}

export default Login;
