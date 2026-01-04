import React from "react";
import { Link } from "react-router";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaBookReader,
} from "react-icons/fa";
import toast from "react-hot-toast";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!");
      e.target.reset();
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <footer className="py-10 bg-base-200 sm:pt-16 lg:pt-24 border-t border-base-300">
      <div className="px-4 container mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-2 lg:pr-8">
            <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-primary">
              <FaBookReader />
              EducareHub
            </Link>

            <p className="text-base leading-relaxed mt-7 text-gray-600">
              A premier online learning platform, committed to fostering a
              community of lifelong learners and providing access to world-class
              education for everyone, everywhere.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              {/* Social links usually point to external sites */}
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 text-base-content hover:text-primary"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 text-base-content hover:text-primary"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 text-base-content hover:text-primary"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 text-base-content hover:text-primary"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/about"
                  className="flex text-base transition-all duration-200 hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="flex text-base transition-all duration-200 hover:text-primary"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/teach"
                  className="flex text-base transition-all duration-200 hover:text-primary"
                >
                  Teach on EducareHub
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex text-base transition-all duration-200 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Support
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="flex text-base transition-all duration-200 hover:text-primary"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="flex text-base transition-all duration-200 hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex text-base transition-all duration-200 hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>
            <form onSubmit={handleSubscribe} className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full p-4 transition-all duration-200 border border-gray-300 rounded-md focus:outline-none focus:border-primary caret-primary bg-base-100"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3 w-full text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center text-gray-600">
            © {new Date().getFullYear()} EducareHub. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;