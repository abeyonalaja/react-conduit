import React from "react";

const Banner = {appName} => (
    <div className="banner">
        <div className="container">
            <h1 className="logo-front">
                {appName.toLowerCaser()}
            </h1>
            <p>A place to share your Knowledge</p>
        </div>
    </div>
)

export default Banner;