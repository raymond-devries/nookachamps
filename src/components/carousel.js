import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Truck from "./images/carousel/Truck";import OrganicSign from "./images/carousel/OrganicSign";import Trees1 from "./images/carousel/Trees1";import Trees3 from "./images/carousel/Trees3";import BabyTrees from "./images/carousel/BabyTrees";import Tree2 from "./images/carousel/Tree2";import BabyTrees2 from "./images/carousel/BabyTrees2";import IMG_1868 from "./images/carousel/IMG_1868";import Closeup from "./images/carousel/Closeup";const MyCarousel = () => (
    <Carousel>        <Carousel.Item>
            <Truck/>
        </Carousel.Item>        <Carousel.Item>
            <OrganicSign/>
        </Carousel.Item>        <Carousel.Item>
            <Trees1/>
        </Carousel.Item>        <Carousel.Item>
            <Trees3/>
        </Carousel.Item>        <Carousel.Item>
            <BabyTrees/>
        </Carousel.Item>        <Carousel.Item>
            <Tree2/>
        </Carousel.Item>        <Carousel.Item>
            <BabyTrees2/>
        </Carousel.Item>        <Carousel.Item>
            <IMG_1868/>
        </Carousel.Item>        <Carousel.Item>
            <Closeup/>
        </Carousel.Item></Carousel>
);

export default MyCarousel