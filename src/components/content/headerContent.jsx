import React from "react";
import { Button } from "../button/Button";
import './content.css'
const HeaderContent = ({children}) => {
  return (
    <div className='headerContent'>
      {children}
    </div>
  );
};

export default HeaderContent;
