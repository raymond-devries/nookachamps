import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = ({ siteTitle }) => (
    <header>
        <Navbar bg="light" variant="light" expand="md">
            <Navbar.Brand>{siteTitle}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="">About</Nav.Link>
                    <Nav.Link href="">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>

);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
