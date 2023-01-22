import React, { useState } from "react";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // testing
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

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
        title: `Title: ${title}`,
        contact: `Contact: ${contact}`,
        date: `Date: ${date}`,
        time: `Time: ${time}`,
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
                contacts={contacts}
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
