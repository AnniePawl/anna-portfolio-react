import React from "react";
import "./styles/WritingSection.scss";
import WritingPortfolioItem from "./WritingPortfolioItem";

// Render Portfolio Items
const renderItems = items => {
  const WritingPortfolioItems = items.map(({ name, description, url }) => {
    return (
      <WritingPortfolioItem name={name} description={description} url={url} />
    );
  });

  return WritingPortfolioItems;
};

const WritingSection = props => {
  return (
    <div className="writing-section-container">
      <h1 className="wp__title">Welcome to my Writing Portfolio!</h1>
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

export default WritingSection;
