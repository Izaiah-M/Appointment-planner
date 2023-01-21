import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={setName}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            required
            value={email}
            onChange={setEmail}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            required
            value={phone}
            onChange={setPhone}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
