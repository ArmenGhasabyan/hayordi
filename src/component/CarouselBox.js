import React, { Component } from "react";
import  Carousel  from "react-bootstrap/Carousel";
import forestImg from "../assets/papitati.jpg"
import dforestImg from "../assets/hayordi-1.jpg"

export default class CarouselBox extends Component{
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={ forestImg }
                    alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>forest image</h3>
                        <p>hayordi hayordi hayordi hayordi hayordi hayordi</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={ dforestImg }
                    alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>forest image</h3>
                        <p>hayordi hayordi hayordi hayordi hayordi hayordi</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={ forestImg }
                    alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>forest image</h3>
                        <p>hayordi hayordi hayordi hayordi hayordi hayordi</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}