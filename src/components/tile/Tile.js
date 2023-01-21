import React from "react";

export const Tile = ({ contactDetails }) => {
  return (
    <div className="tile-container">
      {Object.keys(contactDetails).map((key, index) => {
        if (index === 0) {
          return <p key={index}>{contactDetails[key]}</p>;
        } else {
          return <p key={index}>{contactDetails[key]}</p>;
        }
      })}
    </div>
  );
};
