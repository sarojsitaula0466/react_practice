import React from "react";
import Imageholder from "../components/Imageholder/Imageholder";

import HeaderContent from "../components/HeaderContent/HeaderContent";
import "./About.css";
const About = () => {
  return (
    <div>
      <header className="relative-image">
        <div className="imageHolder">
          <Imageholder
            headerHasImage={
              "https://images.unsplash.com/photo-1587786300058-02854e250842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2526&q=80"
            }
          />
        </div>
        <div className="imageHeadContent">
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

export default About;
