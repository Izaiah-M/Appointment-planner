import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <>
      <select onChange={onChange}>
        <option value="default" key="default">
          Select contact
        </option>
        {contacts.map((contact, index) => {
          return (
            <option value={contact.name} key={index}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
