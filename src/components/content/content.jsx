import React from "react";
import { Button } from "../button/Button";
import '../HeaderContent/HeaderContent.css'
const HeaderContent = ({ title, description, buttonName }) => {
  return (
    <div className='headerContent'>
      <h1>{title}</h1>
      <p>{description}</p>
      {buttonName && <Button>{buttonName}</Button>}
    </div>
  );
};

export default HeaderContent;
