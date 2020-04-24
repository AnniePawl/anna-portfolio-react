import React from "react";
import "./styles/WritingSection.scss";
import Card from "react-bootstrap/Card";

const WritingItem = ({ img, title, description, link }) => {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="writing-button">
            <a href={link} target="_blank">
              Check it Out
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

// function WritingItem() {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <button>Check it Out</button>
//         {/* <Button variant="primary">Go somewhere</Button> */}
//       </Card.Body>
//     </Card>
//   );
// }

// const WritingItem = ({ url, name, description }) => {
//   return (
//     <div className="writing-item">
//       <a className="writing-item_a" href={url}>
//         <h1 className="writing-item_name">{name}</h1>
//         <p className="writing-item_description">{description}</p>
//       </a>
//     </div>
//   );
// };

export default WritingItem;
