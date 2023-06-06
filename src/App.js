import CheckInType from "./views/auth/checktypein";
import Name from "./views/auth/name";
import { Routes, Switch, Route, Link } from "react-router-dom";
import Studentdetails from "./views/auth/studentdetails";
import Checkedin from "./views/auth/checkedin";
import { useState } from "react";
import Alluser from "./views/auth/alluser";
import Checkedintwo from "./views/auth/checkedintwo";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CheckInType />} />
      <Route path="/name" element={<Name />} />
      <Route path="/studentdetails" element={<Studentdetails />} />
      <Route path="/allcheckedin" element={<Checkedin />} />
      <Route path="/allusers" element={<Alluser />} />
      <Route path="/checkedin" element={<Checkedintwo />} />
    </Routes>
  );
}
