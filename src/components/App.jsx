import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './userComponents/SignIn';
import SignUp from './userComponents/SignUp';

export default function App({ user }) {
  return (
    <>
      <div>
        <Navbar user={user} />
      </div>

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}
