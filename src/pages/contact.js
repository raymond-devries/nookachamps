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
                    name="contact"
                    method="POST"
                    action="/success/"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    <input
                        type="hidden"
                        name="form-name"
                        value="contact"
                    />
                    <p className="hidden-form">
                        <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
                    </p>
                    <Form.Group controlId="email">
                        <Form.Label column="">Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="name@example.com"
                            name="email"
                        />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label column="">Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="John Smith"
                            name="name"
                        />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label column="">Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="optional"
                            name="phone"
                        />
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label column="">Message</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            placeholder="Your message here"
                            rows="10"
                            name="message"
                        />
                    </Form.Group>
                    {/*If there is issues with spam add this*/}
                    {/*<div data-netlify-recaptcha="true" />*/}
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
