import React from "react";

const Button = ({ onClick = null, children = null }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
