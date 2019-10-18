import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <div className="blue-background contact-page text-white">
            <div className="space" />
            <h1 className="text-center">Contact Us</h1>

            <div className="contact-form">
                <Form
                    className="mx-5"
                    data-netlify="true"
                    method="POST"
                    action={"/success/"}
                >
                    <Form.Group controlId="email">
                        <Form.Label column="">Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="name@example.com"
                        />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label column="">Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="John Smith"
                        />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label column="">Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="optional" />
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label column="">Message</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            placeholder="Your message here"
                            rows="10"
                        />
                    </Form.Group>
                    <Button
                        variant="success"
                        type="submit"
                        size="lg"
                        className="px-5"
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    </Layout>
);

export default Contact;
