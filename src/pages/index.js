import React from "react";
import { Link } from "gatsby";
import "../components/main.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
import IndexTop from "../components/images/index-bg-imgs";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <IndexTop className="p-1 text-white" />
        <div className=""/>
        <div className="black-background section">
                <h1>Who we are?</h1>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
