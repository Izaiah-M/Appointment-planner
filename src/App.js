import React from "react";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" redirect={ROUTES.CONTACTS} />
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage />} />
          <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
