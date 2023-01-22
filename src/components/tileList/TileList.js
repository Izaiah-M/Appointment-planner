import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ object }) => {
  // console.log(contacts);

  return (
    <div>
      <ul>
        {object.map((contact, index) => {
          return (
            <li key={index}>
              <Tile contactDetails={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
