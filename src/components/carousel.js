import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Trees1 from "./images/carousel/Trees1";import Trees3 from "./images/carousel/Trees3";import OrganicSign from "./images/carousel/OrganicSign";import Truck from "./images/carousel/Truck";import Tree2 from "./images/carousel/Tree2";import Closeup from "./images/carousel/Closeup";import PhotoOct1024230PM from "./images/carousel/PhotoOct1024230PM";const MyCarousel = () => (
    <Carousel>        <Carousel.Item>
            <Trees1/>
        </Carousel.Item>        <Carousel.Item>
            <Trees3/>
        </Carousel.Item>        <Carousel.Item>
            <OrganicSign/>
        </Carousel.Item>        <Carousel.Item>
            <Truck/>
        </Carousel.Item>        <Carousel.Item>
            <Tree2/>
        </Carousel.Item>        <Carousel.Item>
            <Closeup/>
        </Carousel.Item>        <Carousel.Item>
            <PhotoOct1024230PM/>
        </Carousel.Item></Carousel>
);

export default MyCarousel