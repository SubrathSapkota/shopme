import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Admin />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
