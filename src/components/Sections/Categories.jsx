import { motion } from "framer-motion";
import { FaCode, FaChartLine, FaPaintBrush, FaBullhorn, FaBusinessTime, FaDatabase } from "react-icons/fa";
import { Link } from "react-router";
import Container from "../Shared/Container";

const categories = [
  { id: 1, name: "Web Development", icon: <FaCode />, count: "25+ Courses" },
  { id: 2, name: "Data Science", icon: <FaDatabase />, count: "18+ Courses" },
  { id: 3, name: "Design", icon: <FaPaintBrush />, count: "30+ Courses" },
  { id: 4, name: "Marketing", icon: <FaBullhorn />, count: "12+ Courses" },
  { id: 5, name: "Business", icon: <FaBusinessTime />, count: "20+ Courses" },
  { id: 6, name: "Analysis", icon: <FaChartLine />, count: "15+ Courses" },
];

const Categories = () => {
  return (
    <section className="py-20 bg-base-100">
      <Container>
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-wide uppercase">Top Categories</p>
          <h2 className="text-4xl font-bold mt-2">Explore By Category</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <Link to="/courses" key={cat.id}>
              <motion.div
                className="card bg-base-200 hover:bg-primary hover:text-white transition-all duration-300 p-6 flex flex-col items-center justify-center gap-4 cursor-pointer shadow-sm hover:shadow-xl border border-transparent hover:border-primary-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl">{cat.icon}</div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                  <p className="text-xs opacity-70 mt-1">{cat.count}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;