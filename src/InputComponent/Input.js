import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete="off"
    />
  );
}

export default Input;
