import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Container from "../Shared/Container";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    title: "Senior Web Developer",
    image: "https://i.ibb.co/5h1f13z/user.png", // Replace with real images if available
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Data Scientist",
    image: "https://i.ibb.co/5h1f13z/user.png",
  },
  {
    id: 3,
    name: "Alex Johnson",
    title: "UX/UI Designer",
    image: "https://i.ibb.co/5h1f13z/user.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "Marketing Expert",
    image: "https://i.ibb.co/5h1f13z/user.png",
  },
];

const Instructors = () => {
  return (
    <section className="py-20 bg-base-200">
      <Container>
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-wide uppercase">Team Members</p>
          <h2 className="text-4xl font-bold mt-2">Meet Our Expert Instructors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((inst, index) => (
            <motion.div
              key={inst.id}
              className="card bg-base-100 shadow-xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <figure className="relative h-64 overflow-hidden">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="text-white hover:text-primary text-xl"><FaFacebook /></a>
                  <a href="#" className="text-white hover:text-primary text-xl"><FaTwitter /></a>
                  <a href="#" className="text-white hover:text-primary text-xl"><FaLinkedin /></a>
                </div>
              </figure>
              <div className="card-body text-center">
                <h2 className="text-xl font-bold">{inst.name}</h2>
                <p className="text-primary font-medium">{inst.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Instructors;