import { Link } from "react-router-dom";
import './VendingMachine.css'

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <h1>Choose an item</h1>

            <nav>
                <Link className="VendingMachine-Link" to='/pop-tart'>Pop-Tarts</Link>
                <Link className="VendingMachine-Link" to='/candy'>Candy</Link>
                <Link className="VendingMachine-Link" to='/gum'>Gum</Link>
            </nav>

            <img
                src="https://mlnnx0p1ut8l.i.optimole.com/_C_aIyU-YHNEpTgh/w:900/h:1200/q:auto/https://uselectit.com/wp-content/uploads/evoke6.png"
                alt="Vending."
            />
        </div>
    )
}

export default VendingMachine;