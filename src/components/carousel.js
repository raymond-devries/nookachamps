import React from "react";
import Carousel from "react-bootstrap/Carousel";
import OrganicSign from "./images/carousel/OrganicSign";
import Closeup from "./images/carousel/Closeup";
import BabyTrees from "./images/carousel/BabyTrees";
import Truck from "./images/carousel/Truck";
import Trees3 from "./images/carousel/Trees3";
import Trees1 from "./images/carousel/Trees1";
import BabyTrees3 from "./images/carousel/BabyTrees3";
import BabyTrees2 from "./images/carousel/BabyTrees2";
import Tree2 from "./images/carousel/Tree2";

const MyCarousel = () => (
    <Carousel>
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
);

export default MyCarousel
