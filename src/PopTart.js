import React from "react";
import { NavLink } from "react-router-dom";

function PopTart() {
    return (
        <div>
            <h1>Pop Tarts</h1>

            <NavLink to='/'>Vending Machine</NavLink>

            {/* img appears above link w/o empty p */}
            <p></p> 
            <img
                src="https://i5.walmartimages.com/asr/a4345f9c-e5f3-489b-8dc5-75cf83625193_1.d98ba3191dc385cfaab0069b104835ee.jpeg"
                alt="Pop Tart."
            />

        </div>
    );
}

export default PopTart;