"use client";
import { useHandleScroll } from "@/hooks/useHandleScroll";
import ImageComponent from "./ImageComponent";

const Header = () => {
  const { isScrolled } = useHandleScroll();
  return (
    <header
      className={`max-w-screen-2xl w-full fixed top-0 left-0 z-20 py-4 px-6 flex justify-between items-center transition-colors duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <ImageComponent
        alt="codefinity logo"
        width={50}
        height={30}
        src="/images/codefinity_logo.jpeg"
      />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#blogs" className="hover:text-gray-400">
              Blogs
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
          </li>
          {/* <li>
            <a href="#success-stories" className="hover:text-gray-400">
              Success Stories
            </a>
          </li>
          <li>
            <a href="#culture" className="hover:text-gray-400">
              Culture
            </a>
          </li> */}
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
