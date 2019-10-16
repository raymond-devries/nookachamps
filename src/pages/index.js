import React from "react";
import { Link } from "gatsby";
import "../components/main.css"

import Layout from "../components/layout";
import SEO from "../components/seo";
import IndexTop from "../components/index-bg-imgs";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <IndexTop className="p-5 text-white"/>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
