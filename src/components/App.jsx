import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calender from './Calender';
import Drugs from './Drugs';
import Navbar from './Navbar';
import Profile from './Profile';
import SignIn from './userComponents/SignIn';
import SignUp from './userComponents/SignUp';

export default function App({ user, allDrugs }) {
  return (
    <>
      <div>
        <Navbar user={user} />
        <Calender allDrugs={allDrugs} />
      </div>
      <Routes>
        <Route path="/" element={<Drugs allDrugs={allDrugs} />} />
        <Route path="/profile" element={<Profile user={user} allDrugs={allDrugs} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}
