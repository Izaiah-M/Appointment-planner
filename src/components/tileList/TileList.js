import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts }) => {
  // console.log(contacts);

  return (
    <div>
      <ul>
        {contacts.map((contact, index) => {
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
