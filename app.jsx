import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";
import ViewUser from "./User/ViewUser";
import Random from "./User/random";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route path="/viewuser/:id" element={<ViewUser />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </>
  );
}

export default App;
