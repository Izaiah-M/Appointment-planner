import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

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
        <label>
          Title:
          <input
            type="text"
            name="title"
            required
            value={title}
            onChange={setTitle}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            required
            value={date}
            onChange={setDate}
            min={getTodayString()}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            required
            value={time}
            onChange={setTime}
          />
        </label>
        <ContactPicker contacts={contacts} onChange={setContact} required />
        <input type="submit" value="Set Appointment" />
      </form>
    </div>
  );
};
