import React from "react";
import Filler from "./images/filler";

const Values = () => (
    <div className="black-background p-4 header-text text-white text-center">
        <h1>Our Values</h1>
        <div className="d-lg-flex justify-content-center">
            <div className="p-3 value-icons">
                <h2>Sustainable</h2>
                <Filler/>
                <p>
                    We believe in treating the land and the environment right so
                    it can continue to produce.
                </p>
            </div>
            <div className="p-3 value-icons">
                <h2>Ethical</h2>
                <Filler/>
                <p>
                    Treating our employees, vendors and customers without the
                    utmost respect is essential to our business.
                </p>
            </div>

            <div className="p-3 value-icons">
                <h2>Family-Owned</h2>
                <Filler/>
                <p>
                    The land we farm has been part of the DeVries heritage for over
                    50 years. We take pride in continuing what Raymond and Alice
                    DeVries started in 1962.
                </p>
            </div>
        </div>
    </div>
);

export default Values;
