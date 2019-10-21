import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Truck from "./images/carousel/Truck";import Closeup from "./images/carousel/Closeup";import OrganicSign from "./images/carousel/OrganicSign";import Tree2 from "./images/carousel/Tree2";import Trees1 from "./images/carousel/Trees1";import PhotoOct0134433PM from "./images/carousel/PhotoOct0134433PM";import Trees3 from "./images/carousel/Trees3";import PhotoOct1024230PM from "./images/carousel/PhotoOct1024230PM";const MyCarousel = () => (
    <Carousel>        <Carousel.Item>
            <Truck/>
        </Carousel.Item>        <Carousel.Item>
            <Closeup/>
        </Carousel.Item>        <Carousel.Item>
            <OrganicSign/>
        </Carousel.Item>        <Carousel.Item>
            <Tree2/>
        </Carousel.Item>        <Carousel.Item>
            <Trees1/>
        </Carousel.Item>        <Carousel.Item>
            <PhotoOct0134433PM/>
        </Carousel.Item>        <Carousel.Item>
            <Trees3/>
        </Carousel.Item>        <Carousel.Item>
            <PhotoOct1024230PM/>
        </Carousel.Item></Carousel>
);

export default MyCarousel