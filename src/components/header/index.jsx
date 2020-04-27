import React from "react";
import ImageHolder from "../Imageholder/Imageholder";
import HeaderContent from "../HeaderContent/HeaderContent";

const index = () => {
  return (
    <div>
      <ImageHolder imageURL={"https://images.unsplash.com/photo-1587786300058-02854e250842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2526&q=80"}> </ImageHolder>
      <HeaderContent
        buttonName={"Button"}
        title={"Title"}
        description={"description"}
      />
    </div>
  );
};

export default index;
