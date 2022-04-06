import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./style.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/dashboard/:userId' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
