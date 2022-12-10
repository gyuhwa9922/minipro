import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    border: 1px solid black;
  }
  > .slick-dots li.slick-active button {
    background: "none";
  }
`;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#000000",
  width: "450px",
};

const ImagesCarousel = ({ images }) => {
  return (
    <CarouselWrapper autoplay dotPosition={"right"}>
      {images.map((src, index) => (
        <div>
          <img style={contentStyle} key={index} src={images[index].src} />
        </div>
      ))}
    </CarouselWrapper>
  );
};

export default ImagesCarousel;
