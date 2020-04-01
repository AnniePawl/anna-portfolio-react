import React from "react";
import WritingItem from "./WritingSectionItem";
import barter from "../../../assets/WritingImages/barter.png";
import redis from "../../../assets/WritingImages/redis.png";
import "./styles/WritingSection.scss";

// Render Portfolio Items
const renderItems = items => {
  const WritingItems = items.map(({ img, title, description, link }) => {
    return (
      <WritingItem
        img={img}
        title={title}
        description={description}
        link={link}
      />
    );
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
    img: barter,
    title: "Bringing Back the Barter Economy",
    description: "Published in UX Collective",
    link: "https://uxdesign.cc/bringbarterback-72b530ba1c59"
  },
  {
    img: redis,
    title: "Leading the Way with Redis",
    description: "Published in HackerNoon",
    link: "https://medium.com/hackernoon/redis-gamification-60e49b5494ae"
  }
  // {
  //   img: "",
  //   title: "Drawing with Code",
  //   description: "lalala"
  // }
];

export default WritingSection;
