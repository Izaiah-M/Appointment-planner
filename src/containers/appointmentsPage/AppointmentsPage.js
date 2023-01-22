import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts,
}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const settTitle = ({ target }) => {
    setTitle(target.value);
  };

  const settContact = ({ target }) => {
    setContact(target.value);
  };

  const settDate = ({ target }) => {
    setDate(target.value);
  };

  const settTime = ({ target }) => {
    setTime(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          handleSubmit={handleSubmit}
          contact={contact}
          date={date}
          time={time}
          title={title}
          setContact={settContact}
          setDate={settDate}
          setTitle={settTitle}
          setTime={settTime}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList object={appointments} />
      </section>
    </div>
  );
};
