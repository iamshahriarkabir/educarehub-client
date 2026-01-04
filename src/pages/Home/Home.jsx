import { useEffect } from "react";
import HomeBanner from "../../components/Banners/HomeBanner";
import PopularCourses from "../../components/Sections/PopularCourses";
import WhyChooseUs from "../../components/Sections/WhyChooseUs";
import Connection from "../../components/Sections/Connection";
import Categories from "../../components/Sections/Categories";
import Instructors from "../../components/Sections/Instructors";
import Testimonials from "../../components/Sections/Testimonials";
import FAQ from "../../components/Sections/FAQ";
import Blogs from "../../components/Sections/Blogs";
import SpecialOffer from "../../components/Sections/SpecialOffer"; // NEW Import

const Home = () => {
  useEffect(() => {
    document.title = "EducareHub | Home";
  }, []);

  return (
    <div>
      <HomeBanner />
      <Categories />
      <SpecialOffer />   {/* Added Here */}
      <PopularCourses />
      <WhyChooseUs />
      <Instructors />
      <Testimonials />
      <FAQ />
      <Blogs />
      <Connection />
    </div>
  );
};

export default Home;