import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Photo Oct 01, 3 44 33 PM from "./images/carousel/Photo Oct 01, 3 44 33 PM";import OrganicSign from "./images/carousel/OrganicSign";import Photo Oct 10, 2 42 30 PM from "./images/carousel/Photo Oct 10, 2 42 30 PM";import Trees3 from "./images/carousel/Trees3";import Tree2 from "./images/carousel/Tree2";import Trees1 from "./images/carousel/Trees1";import Closeup from "./images/carousel/Closeup";import Truck from "./images/carousel/Truck";const MyCarousel = () => (
    <Carousel>        <Carousel.Item>
            <Photo Oct 01, 3 44 33 PM/>
        </Carousel.Item>        <Carousel.Item>
            <OrganicSign/>
        </Carousel.Item>        <Carousel.Item>
            <Photo Oct 10, 2 42 30 PM/>
        </Carousel.Item>        <Carousel.Item>
            <Trees3/>
        </Carousel.Item>        <Carousel.Item>
            <Tree2/>
        </Carousel.Item>        <Carousel.Item>
            <Trees1/>
        </Carousel.Item>        <Carousel.Item>
            <Closeup/>
        </Carousel.Item>        <Carousel.Item>
            <Truck/>
        </Carousel.Item></Carousel>
);

export default MyCarousel