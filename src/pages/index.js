import React from "react";
import { Link } from "gatsby";
import "../components/main.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Carousel from "react-bootstrap/Carousel";

import IndexTop from "../components/images/index-bg-imgs";
import WaState from "../components/images/waState";

import BabyTrees from "../components/images/carousel/BabyTrees";
import BabyTrees2 from "../components/images/carousel/BabyTrees2";
import BabyTrees3 from "../components/images/carousel/BabyTrees3";
import Closeup from "../components/images/carousel/Closeup";
import OrganicSign from "../components/images/carousel/OrganicSign";
import Tree2 from "../components/images/carousel/Tree2";
import Trees1 from "../components/images/carousel/Trees1";
import Trees3 from "../components/images/carousel/Trees3";
import Truck from "../components/images/carousel/Truck";

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
            <Carousel className="p-5 section">
                <Carousel.Item>
                    <OrganicSign/>
                </Carousel.Item>
                <Carousel.Item>
                    <Closeup/>
                </Carousel.Item>
                <Carousel.Item>
                    <BabyTrees/>
                </Carousel.Item>
                <Carousel.Item>
                    <Truck/>
                </Carousel.Item>
                <Carousel.Item>
                    <Trees3/>
                </Carousel.Item>
                <Carousel.Item>
                    <Trees1/>
                </Carousel.Item>
                <Carousel.Item>
                    <BabyTrees3/>
                </Carousel.Item>
                <Carousel.Item>
                    <BabyTrees2/>
                </Carousel.Item>
                <Carousel.Item>
                    <Tree2/>
                </Carousel.Item>
            </Carousel>
        </div>

        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
