import React from "react";
import { Link } from "gatsby";
import "../components/main.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

import IndexTop from "../components/images/index-bg-imgs";
import WaState from "../components/images/waState";

import MyCarousel from "../components/carousel";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <IndexTop className="p-1 text-white" />
        <div className="black-background pt-5 text-white text-center header-text">
            <h1 className="p-2">Who we are?</h1>
            <div className="p-3 images">
                <WaState />
            </div>
            <h1 className="p-3 pb-5 m-0">
                A family-owned, sustainable, organic hazelnut orchard.
            </h1>
        </div>
        <div className="green-background p-5">
            <MyCarousel/>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
