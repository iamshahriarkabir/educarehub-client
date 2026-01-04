import { useEffect } from "react";
import { Link } from "react-router";
import Container from "../components/Shared/Container";
import { FaChalkboardTeacher, FaMoneyBillWave, FaClock } from "react-icons/fa";

const Teach = () => {
  useEffect(() => {
    document.title = "EducareHub | Teach with Us";
  }, []);

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[500px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src="https://i.ibb.co/LdjLMHV8/client-logo1.webp" // You can replace with a better teacher image
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Teaching"
          />
          <div>
            <h1 className="text-5xl font-bold">Come teach with us</h1>
            <p className="py-6 text-lg">
              Become an instructor and change lives — including your own. 
              Share your knowledge, inspire students, and earn money.
            </p>
            <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">So many reasons to start</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <FaChalkboardTeacher className="text-6xl text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Teach your way</h3>
              <p className="text-gray-600">
                Publish the course you want, in the way you want, and always have control of your own content.
              </p>
            </div>
            <div className="text-center p-6">
              <FaMoneyBillWave className="text-6xl text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Inspire learners</h3>
              <p className="text-gray-600">
                Teach what you know and help learners explore their interests, gain new skills, and advance their careers.
              </p>
            </div>
            <div className="text-center p-6">
              <FaClock className="text-6xl text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">Get rewarded</h3>
              <p className="text-gray-600">
                Expand your professional network, build your expertise, and earn money on each paid enrollment.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Teach;