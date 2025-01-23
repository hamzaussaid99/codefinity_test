"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import BlogComponent from "./BlogComponent";
import { sliderSettings } from "@/lib/types";
import { blogs } from "@/lib/config";
import Slider from "react-slick";

const SliderComponent = () => {
  return (
    <Slider {...sliderSettings} className="mx-auto min-h-[520px] h-fit">
      {blogs.map((blog, index) => (
        <BlogComponent key={index} {...blog} />
      ))}
    </Slider>
  );
};

export default SliderComponent;
