import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import Container from "../Shared/Container";

const blogs = [
  {
    id: 1,
    title: "Top 10 Web Development Trends in 2025",
    date: "Jan 10, 2025",
    author: "Admin",
    image: "https://i.ibb.co/wzkP6yJ/blog1.jpg", // Replace with relevant image
    excerpt: "Discover the latest technologies and frameworks that are shaping the future of web development.",
  },
  {
    id: 2,
    title: "How to Start a Career in Data Science",
    date: "Jan 15, 2025",
    author: "Admin",
    image: "https://i.ibb.co/wzkP6yJ/blog1.jpg",
    excerpt: "A step-by-step guide to becoming a data scientist, from learning the basics to landing your first job.",
  },
  {
    id: 3,
    title: "The Importance of Soft Skills",
    date: "Jan 20, 2025",
    author: "Admin",
    image: "https://i.ibb.co/wzkP6yJ/blog1.jpg",
    excerpt: "Technical skills are important, but soft skills are what will set you apart in the workplace.",
  },
];

const Blogs = () => {
  return (
    <section className="py-20 bg-base-100">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-primary font-bold tracking-wide uppercase">Our Blog</p>
            <h2 className="text-4xl font-bold mt-2">Latest News & Articles</h2>
          </div>
          <Link to="#" className="btn btn-outline btn-primary hidden md:flex">
            View All Posts <FaArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUser /> {blog.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold hover:text-primary cursor-pointer">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 mb-4">
                  {blog.excerpt}
                </p>
                <Link to="#" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;