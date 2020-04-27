import React from "react";
import "./header.css";
const Imageholder = ({ headerHasImage, backgroundColor }) => {
  return (
    <div className="imgAndBackground">
      {headerHasImage ? (
        <img  className='image' src={headerHasImage} alt="bgimage" />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Imageholder;
