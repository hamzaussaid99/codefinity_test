"use client";
import { Blog } from "@/lib/types";
import React from "react";
import ImageComponent from "./ImageComponent";

const BlogComponent = ({ title, description, image, rating }: Blog) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden mx-2 min-h-[500px]">
      <ImageComponent
        src={image}
        alt={title}
        width={400}
        height={250}
        imageClassName="w-full h-60"
        wrapperClassName="w-full"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-yellow-500 font-semibold">
          ⭐ {rating.toFixed(1)} / 5
        </p>
      </div>
    </div>
  );
};

export default BlogComponent;
