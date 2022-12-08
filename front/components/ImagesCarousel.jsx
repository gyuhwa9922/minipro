import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const RedBorder = styled(Carousel)`
  .ant-carousel.slick-dots-li-button && {
    border: 1px solid red;
  }
`;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#000000",
  width: "650px",
};

const ImagesCarousel = ({ images }) => {
  return (
    <RedBorder autoplay>
      {images.map((src, index) => (
        <div>
          <img style={contentStyle} key={index} src={images[index].src} />
        </div>
      ))}
    </RedBorder>
  );
};

export default ImagesCarousel;
