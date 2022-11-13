import React from "react";
import './product.css'
import img from '../assets/cookie.jpeg'

const Product = () => {
    return (
        <div className="product">
            <p className="cafeTitle">Award-Winning Cafe design</p>
            <p className="introduction">At Brew, we pride ourselves on brewing differently with authentic brewing machines. Coffee is brewed on site by our highly trained baristas and coffee</p>
            <p className="introduction">masters, with state of the art machines to provide you with the best experience and most flavorful cup of coffee. The atmosphere is modern,</p>
            <p className="introduction">open and inviting, creating the perfect space to work, study or meet up with friends. </p>
            <div className="combine">
                <div className="image">
                <img className="cookieImg" src={img} alt="" />
                </div>
                <div className="desBox">
                    <p className="descriptionTitle">Everything You Need</p>
                    <p className="descriptionText">Beautiful menus, OpenTable reservations,</p>
                    <p className="descriptionText">and Best coffee in Worcester</p>
                    <p className="descriptionText">eCommerce are just a click away</p>
                    <p className="descriptionText">from the restaurant website-</p>
                    <p className="descriptionText">all within a single interface.</p>
                </div>
            </div>
        </div>
    )
}

export default Product;