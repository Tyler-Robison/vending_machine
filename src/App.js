import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import PopTart from "./PopTart";
import Candy from "./Candy";
import Gum from "./Gum";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <h1>Vending Machine</h1>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/pop-tart" element={<PopTart />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/gum" element={<Gum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
