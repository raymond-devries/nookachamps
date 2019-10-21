import React from "react";
import Ethical from "./images/ethical";
import Family from "./images/family-owned";
import Sustainable from "./images/sustainable";

const Values = () => (
    <div className="black-background p-4 header-text text-white text-center">
        <h1>Our Values</h1>
        <div className="d-lg-flex justify-content-center">
            <div className="p-3 value-icons">
                <h2>Sustainable</h2>
                <div className="p-3"><Sustainable/></div>
                <p>
                    We believe in treating the land and the environment right so
                    it can continue to produce.
                </p>
            </div>
            <div className="p-3 value-icons">
                <h2>Ethical</h2>
                <div className="p-3"><Ethical/></div>
                <p>
                    Treating our employees, vendors and customers with the
                    utmost respect is essential to our business.
                </p>
            </div>

            <div className="p-3 value-icons">
                <h2>Family-Owned</h2>
                <div className="p-3"><Family/></div>
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
