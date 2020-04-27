import React from "react";
import './content.css'
export const Content = ({ title, description, button }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      {button}
    </div>
  );
};
