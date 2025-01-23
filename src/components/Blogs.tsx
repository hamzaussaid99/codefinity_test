"use client";
import { blogs } from "@/lib/config";
import BlogComponent from "./BlogComponent";
import { sliderSettings } from "@/lib/types";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false, // Disable server-side rendering for react-slick
});

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const BlogSection = () => {
  return (
    <section id="blogs" className="py-12 px-6">
      <Slider {...sliderSettings} className="mx-auto min-h-[520px] h-fit">
        {blogs.map((blog, index) => (
          <BlogComponent key={index} {...blog} />
        ))}
      </Slider>
    </section>
  );
};

export default BlogSection;
