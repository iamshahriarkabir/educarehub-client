import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Container from "../Shared/Container";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Developer",
    review: "EducareHub changed my career path. The courses are well-structured and the instructors are top-notch.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Marketing Manager",
    review: "I learned so much in just a few weeks. The practical examples really helped me understand the concepts.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Lee",
    role: "Student",
    review: "The platform is easy to use and the support team is very helpful. Highly recommended!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-base-200">
      <Container>
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-wide uppercase">Testimonials</p>
          <h2 className="text-4xl font-bold mt-2">What Our Students Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.id}
              className="card bg-base-100 shadow-xl p-8 border-t-4 border-primary relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-4xl text-gray-200 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4 text-orange-400">
                {[...Array(testi.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testi.review}"</p>
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/5h1f13z/user.png" alt="User" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">{testi.name}</h4>
                  <p className="text-xs text-gray-500">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;