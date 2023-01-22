import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import "./AppointmentForm.css";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={setTitle}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          required
          value={date}
          onChange={setDate}
          min={getTodayString()}
        />
        <label htmlFor="time" className="lable">
          Time:
        </label>
        <input
          type="time"
          name="time"
          required
          value={time}
          onChange={setTime}
        />
        <label htmlFor="contact">Contact</label>
        <ContactPicker
          contacts={contacts}
          onChange={setContact}
          required
          name="contact"
        />
        <input type="submit" value="Set Appointment" />
      </form>
    </div>
  );
};
