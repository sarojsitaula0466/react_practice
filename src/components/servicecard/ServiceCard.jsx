import React from "react";
import './ServiceCard.css'
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="serviceContent">
      <img src={icon} alt="icon" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
