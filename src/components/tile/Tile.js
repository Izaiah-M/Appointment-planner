import React from "react";
import "./Tile.css";

export const Tile = ({ contactDetails }) => {
  return (
    <div className="tile-container">
      {Object.keys(contactDetails).map((key, index) => {
        if (index === 0) {
          return (
            <p key={index} className="tile-title">
              {contactDetails[key]}
            </p>
          );
        } else {
          return (
            <p key={index} className="tile">
              {contactDetails[key]}
            </p>
          );
        }
      })}
    </div>
  );
};
