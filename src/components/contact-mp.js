import React from "react";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";

const ContactMp = () => (
    <div className="p-5 text-center green-background text-white">
        <h3 className="p-3">
            If you are interested in our product, have questions, or just want
            to say hi
        </h3>
        <div className="m-4">
            <Link to="/contact">
                <Button variant="light" className="px-5" size="lg">
                    <h2>Contact Us</h2>
                </Button>
            </Link>
        </div>
    </div>
);

export default ContactMp;
