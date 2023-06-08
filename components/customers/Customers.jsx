import React from "react";
import Slider from "react-slick";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="container mx-auto my-10">
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
      <Slider {...settings}>
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
      </Slider>
    </div>
  );
};

export default Customers;
