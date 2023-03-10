import React, { useEffect, useState } from "react";
// import "./contactPage.css";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [duplicate, setDuplicate] = useState(false);

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

    if (duplicate === false) {
      addContact(name, email, phoneNumber);
      setEmail("");
      setName("");
      setPhoneNumber("");
    }

    if (duplicate === true) {
      // console.log("Exists");
      alert("Contact name already exists exists!!");
      setEmail("");
      setName("");
      setPhoneNumber("");
    }
  };

  useEffect(() => {
    setDuplicate(contacts.some((contact) => contact.name === name));
  }, [name, contacts]);

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
        <TileList object={contacts} />
      </section>
    </div>
  );
};
