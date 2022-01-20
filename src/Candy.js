import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import VendingMachine from "./VendingMachine";

function Candy() {
    return (
        <div>
            <h1>Candy</h1>


            <NavLink to='/'>Vending Machine</NavLink>

            <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-candy-2-1628009075.jpg"
                alt="Candy."
            />

        </div>
    );
}

export default Candy;