import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./logIn/LogIn";
import SupportSection from "./logIn/SupportSection";
import SignUp from "./logIn/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />

        <Route path="/support" element={<SupportSection />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
