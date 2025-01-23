import BlogSection from "@/components/Blogs";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <BlogSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
