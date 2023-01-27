import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import React, { useEffect, useState } from "react";
import Drugs from './Drugs';
import Navbar from './Navbar';
import Profile from './Profile';
import SignIn from './userComponents/SignIn';
import SignUp from './userComponents/SignUp';

export default function App({ user, allDrugs }) {
  const [modal, setModal] = useState([]);
  return (
    <>
      <div>
        <Navbar modal={modal} user={user} />
      </div>
      <Routes>
        <Route path="/" element={<Drugs setModal={setModal} allDrugs={allDrugs} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}
