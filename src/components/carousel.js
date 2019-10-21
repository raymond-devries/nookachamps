import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Closeup from "./images/carousel/Closeup";
import Truck from "./images/carousel/Truck";
import Trees1 from "./images/carousel/Trees1";
import OrganicSign from "./images/carousel/OrganicSign";
import Tree2 from "./images/carousel/Tree2";
import IMG_1868 from "./images/carousel/IMG_1868";
const MyCarousel = () => (
    <Carousel>
        <Carousel.Item>
            <Closeup />
        </Carousel.Item>
        <Carousel.Item>
            <Truck />
        </Carousel.Item>
        <Carousel.Item>
            <Trees1 />
        </Carousel.Item>
        <Carousel.Item>
            <OrganicSign />
        </Carousel.Item>
        <Carousel.Item>
            <Tree2 />
        </Carousel.Item>
        <Carousel.Item>
            <IMG_1868 />
        </Carousel.Item>
    </Carousel>
);

export default MyCarousel;

