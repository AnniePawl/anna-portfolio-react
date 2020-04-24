import React from "react";
import "./WritingPortfolio.css";

const WritingItem = ({ url, name, description }) => {
  return (
    <div className="writing-item">
      <a className="writing-item_a" href={url}>
        <h1 className="writing-item_name">{name}</h1>
        <p className="writing-item_description">{description}</p>
      </a>
    </div>
  );
};

export default WritingItem;
