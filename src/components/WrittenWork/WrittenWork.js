import React from "react";
import WritingPortfolioItem from "./WritingPortfolioItem";
import "./styles/WrittenWork.scss";

// Render Portfolio Items
const renderItems = items => {
  const WritingPortfolioItems = items.map(({ name, description, url }) => {
    return (
      <WritingPortfolioItem name={name} description={description} url={url} />
    );
  });

  return WritingPortfolioItems;
};

const WrittenWork = props => {
  return (
    <div className="written-work-container">
      <h1 className="written_work__header">WRITTEN WORK</h1>
      {renderItems(publications)}
    </div>
  );
};

// Publication Items
const publications = [
  {
    src: "",
    name: "Leading the Way with Redis",
    description: "Checkout my piece published in Hacker Noon",
    url: "https://hackernoon.com/redis-gamification-60e49b5494ae"
  },

  {
    name: "Bringing Back the Barter Economy",
    description: "Published in UX Collective",
    url: "https://uxdesign.cc/bringbarterback-72b530ba1c59"
  },

  {
    name: "Testing",
    description: "Testing, testing, 123",
    url: ""
  }
];

export default WrittenWork;
