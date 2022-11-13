import React from "react";
import './topBar.css'
const TopBar = () => {
    return (
        <header className="topBar">
            <p className="sideName" data-replace="Brew on the Grid"><span>Brew on the Grid</span></p>
            <div className="sav">
                <p className="savItem">Brew on the Grid</p>
                <p className="savItem">Menu</p>
                <p className="savItem">Order Pick Up</p>
                <p className="savItem">Contact Us</p>
            </div>
        </header>
    )
}

export default TopBar;