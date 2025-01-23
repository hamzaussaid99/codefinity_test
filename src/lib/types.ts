import { Settings } from "react-slick";
export type Blog = {
  title: string;
  description: string;
  rating: number;
  image: string;
};

export const sliderSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const formInitialvalue = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
