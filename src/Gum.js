import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import VendingMachine from "./VendingMachine";

function Gum() {
    return (
        <div>
            <h1>Gum</h1>


            <NavLink to='/'>Vending Machine</NavLink>

            <img
                src="https://m.media-amazon.com/images/I/61oQldbfcsL._SL1000_.jpg"
                alt="Gum."
            />


        </div>
    );
}

export default Gum;