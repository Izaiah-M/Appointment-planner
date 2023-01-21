import React, { useEffect, useState } from "react";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {
      name: "Izaiah",
      phoneNumber: "0767106452",
      email: "imukisa024@gmail.com",
    },
    {
      name: "Mama",
      phoneNumber: "0757106410",
      email: "mamma@mail.com",
    },
  ]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phoneNumber, email) => {
    setContacts((prev) => [
      ...prev,
      {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
      },
    ]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((prev) => [
      ...prev,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
      </nav>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ContactsPage contacts={contacts} addContact={addContact} />
            }
          />
          <Route
            path={ROUTES.APPOINTMENTS}
            element={
              <AppointmentsPage
                appointments={appointments}
                addAppointment={addAppointment}
              />
            }
          />
          <Route
            path={ROUTES.CONTACTS}
            element={
              <ContactsPage contacts={contacts} addContact={addContact} />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
