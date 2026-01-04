import { motion } from "framer-motion";
import { Link } from "react-router";
import Container from "../Shared/Container";

const SpecialOffer = () => {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-white text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
              Limited Time Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get <span className="text-secondary">50% OFF</span> On All <br />
              Web Development Courses!
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto lg:mx-0">
              Unlock your potential with our premium courses. Master React, Node.js,
              and more at an unbeatable price. Offer ends soon!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/courses">
                <button className="btn btn-secondary btn-lg border-none text-white hover:bg-white hover:text-primary transition-colors duration-300 w-full sm:w-auto">
                  Grab The Offer
                </button>
              </Link>
              <Link to="/courses">
                <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary btn-lg w-full sm:w-auto">
                  View All Courses
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center shadow-2xl max-w-sm">
                <h3 className="text-2xl font-bold mb-2">Use Coupon Code</h3>
                <div className="border-2 border-dashed border-white/50 p-4 rounded-lg my-4">
                  <span className="text-3xl font-mono font-bold tracking-widest text-secondary">
                    WEB50
                  </span>
                </div>
                <p className="text-sm opacity-80">
                  Valid until 30th January. Apply at checkout.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SpecialOffer;