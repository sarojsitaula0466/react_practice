import React from "react";
import "./header.css";
export const Header = ({ pic, bgColor }) => {
  return <div className={`${bgColor} ${pic}`}></div>;
};
