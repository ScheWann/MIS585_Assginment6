import React from "react";
import './home.css'

const home = () => {
    return (
        <div className="home">
            <div className="show">
                <p className="title">Brew on the Grid - </p>
                <p className="title" data-replace="Local gourmet coffee shop -"><span>Local gourmet coffee shop</span></p>
                <p className="text">An authentic, artisan coffee café featuring coffees, breakfast pastries, sandwiches and salads. </p>
                <p>Brew is also home to the nitro brew iced coffee, which is sure to keep you energized throughout the day.</p>
                <button className="btn button" style={{ border: 0 }}>Buy Now</button>
            </div>
        </div>
    )
}

export default home