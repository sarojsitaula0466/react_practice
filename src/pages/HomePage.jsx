import React from "react";
import Imageholder from "../components/Imageholder/Imageholder";

import HeaderContent from "../components/HeaderContent/HeaderContent";
import './HomePage.css'
const HomePage = () => {
  return (
    <div>
      <header className='relative'>
        <div className='imageHolder'>
          <Imageholder />
        </div>
        <div className='headContent'>
          <HeaderContent
            title={"Your Story Starts Here"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem"
            }
            buttonName={"Read More"}
          />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
