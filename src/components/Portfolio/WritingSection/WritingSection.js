import React from "react";
import WritingItem from "./WritingSectionItem";
import "./styles/WritingSection.scss";

// Render Portfolio Items
const renderItems = items => {
  const WritingItems = items.map(({ img, title, description }) => {
    return <WritingItem img={img} title={title} description={description} />;
  });
  return WritingItems;
};

const WritingSection = props => {
  return (
    <div className="writing-section-container">
      <h1>Written Work</h1>
      <div className="writing-items">{renderItems(publications)}</div>
    </div>
  );
};

// Publication Items
const publications = [
  {
    img: "Leading the Way with Redis",
    title: "Checkout my piece published in Hacker Noon",
    description: "lalala"
  },
  {
    img: "Leading the Way with Redis",
    title: "Checkout my piece published in Hacker Noon",
    description: "lalala"
  },
  {
    img: "Leading the Way with Redis",
    title: "Checkout my piece published in Hacker Noon",
    description: "lalala"
  }
];

export default WritingSection;
