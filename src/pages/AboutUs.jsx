import { useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../components/Shared/Container";
import { FaUsers, FaAward, FaGlobeAmericas, FaBookOpen } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    document.title = "EducareHub | About Us";
  }, []);

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-20 text-center">
        <Container>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About EducareHub
          </motion.h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We are on a mission to democratize education and make high-quality learning accessible to everyone, everywhere.
          </p>
        </Container>
      </div>

      {/* Mission & Vision */}
      <Container>
        <div className="py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://i.ibb.co/39TTd9Zk/banner-model.png" 
              alt="Our Mission" 
              className="rounded-lg shadow-2xl bg-base-200"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At EducareHub, we believe that education is a fundamental right, not a privilege. Our mission is to create a platform where learners can access world-class courses from industry experts, regardless of their geographical location or financial status.
            </p>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We envision a world where anyone, anywhere can transform their life through learning. We aim to be the global leader in online education, fostering a community of lifelong learners and innovators.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-base-200 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <FaUsers className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-3xl font-bold">50k+</h3>
            <p className="text-gray-500">Active Students</p>
          </div>
          <div className="text-center p-6 bg-base-200 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <FaBookOpen className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-3xl font-bold">120+</h3>
            <p className="text-gray-500">Total Courses</p>
          </div>
          <div className="text-center p-6 bg-base-200 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <FaAward className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-500">Awards Won</p>
          </div>
          <div className="text-center p-6 bg-base-200 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <FaGlobeAmericas className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-gray-500">Countries Reached</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;