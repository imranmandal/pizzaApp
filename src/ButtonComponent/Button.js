import React from "react";

function regFn() {
  alert("Successfully Registered.");
}
function loginFn() {
  alert("Successfully logged in.");
}

function Button(props) {
  return (
    <button
      onClick={props.btnName === "Register" ? regFn : loginFn}
      type="submit"
    >
      {props.btnName}
    </button>
  );
}

export default Button;
