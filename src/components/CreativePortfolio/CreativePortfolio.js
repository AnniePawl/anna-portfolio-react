import React from "react";

function CreativeProjects() {
  return (
    <div className="technical__container">
      <h1> Technical Projects Section </h1>
    </div>
  );
}

export default CreativeProjects;

// // Fiber Arts Items
// const fiberArts = [
//   {
//     src: "./CreativeImages/poodles.png",
//     name: "Poodle",
//     description: "Poodle Embroidery"
//   },

//   {
//     src: "./CreativeImages/jellyfish.png",
//     name: "Jellyfish",
//     description: "An Educational Game for Kids!"
//   },

//   {
//     src: "./CreativeImages/music-note.png",
//     name: "Music Note",
//     description: "An Educational Game for Kids!"
//   },

//   {
//     src: "./CreativeImages/boo.png",
//     name: "Boo",
//     description: "I'm here for the boos"
//   },

//   {
//     src: "./CreativeImages/bamboo.png",
//     name: "Bamboo",
//     description: "Bamboo"
//   },

//   {
//     src: "./CreativeImages/hamsa.png",
//     name: "Hamsa",
//     description: "Hamsa"
//   },

//   {
//     src: "./CreativeImages/polar-bear.png",
//     name: "Polar Bear",
//     description: "A bear!"
//   }
// ];

// const graphicDesign = [];

// // [{}, {}, {}].map() -> [<>, <>, <>]

// // Render Portfolio Items
// const renderItems = items => {
//   const CreativePortfolioItems = items.map(
//     ({ src, name, description, url }) => {
//       return (
//         <CreativePortfolioItem
//           src={src}
//           name={name}
//           description={description}
//           url={url}
//         />
//       );
//     }
//   );

//   return CreativePortfolioItems;
// };

// const CreativePortfolio = props => {
//   return (
//     <div>
//       <h1 className="cp__title">Creative Portfolio</h1>
//       {[<strong>Hello</strong>, <strong>world</strong>]}
//       <h2 className="cp__fiberArtsHeading">Fiber Arts</h2>
//       {renderItems(fiberArts)}
//       <h2 className="cp__publicationsHeading">Graphic Design</h2>
//       {renderItems(graphicDesign)}
//       <footer>{new Date().toLocaleDateString()}</footer>
//     </div>
//   );
// };

// export default CreativePortfolio;
