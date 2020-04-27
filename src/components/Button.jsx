import React from "react";
import "./button.css";

const STYLES=['blueBackground','whiteBackground','noBackground']
const SIZES=['btn-medium','btn-small']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyles,
  buttonSize,
}) => {
    const checkButtonStyles=STYLES.includes(buttonStyles)?buttonStyles:STYLES[0]
    const checkButtonSize=SIZES.includes(buttonSize)?buttonSize:SIZES[0]
  return (
    <button type={type} onClick={onClick} className={`${checkButtonStyles} ${checkButtonSize}`}>
      {children}
    </button>
  );
};
