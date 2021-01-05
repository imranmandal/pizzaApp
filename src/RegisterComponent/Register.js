import React from "react";

import Button from "../ButtonComponent/Button";

function Register() {
  return (
    <div className="form">
      <form>
        <input type="text" name="fname" placeholder="First name" />
        <input type="text" name="lname" placeholder="Last name" />
        <input type="text" name="uname" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="password" placeholder="Confirm password" />
        <Button btnName="Register" />
      </form>
      <p>
        Already Registered?<a href="#"> Login here</a>
      </p>
    </div>
  );
}

export default Register;
