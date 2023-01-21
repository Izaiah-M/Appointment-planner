import React, { useEffect, useState } from "react";
// import "./contactPage.css";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [duplicate, setDuplicate] = useState(false);

  const settName = ({ target }) => {
    const newName = target.value;

    setName(newName);
  };
  const settEmail = ({ target }) => {
    const newEmail = target.value;

    setEmail(newEmail);
  };
  const settPhone = ({ target }) => {
    const newPhone = target.value;

    setPhoneNumber(newPhone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact(name, email, phoneNumber);

    setEmail("");
    setName("");
    setPhoneNumber("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  // useEffect(() => {
  //   contacts.forEach((contact) => {
  //     if (contact.name === name) {
  //       setDuplicate(true);
  //       alert("Contact already exists");
  //       console.log("Contact already exists!!");
  //     } else {
  //       setDuplicate(false);
  //     }
  //   });
  // }, [duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={settName}
          email={email}
          setEmail={settEmail}
          phone={phoneNumber}
          setPhone={settPhone}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
