import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";

const Success = () => (
    <Layout>
        <SEO title="Success" />
        <div className="blue-background contact-page text-white text-center">
            <div className="space" />
            <h2 className="py-5">Thank you for contacting us!</h2>
            <div className="m-4">
                <Link to="/">
                    <Button variant="light" className="px-5" size="lg">
                        <h3>Go back Home</h3>
                    </Button>
                </Link>
            </div>
        </div>
    </Layout>
);

export default Success;