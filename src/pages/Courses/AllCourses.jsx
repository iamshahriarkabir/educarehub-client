import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses, getCoursesCount } from "../../api/lib";
import Container from "../../components/Shared/Container";
import CourseCard from "../../components/Cards/CourseCard";
import SkeletonLoader from "../../components/Shared/SkeletonLoader";
import { motion } from "framer-motion";
import { FaSearch, FaFilter } from "react-icons/fa";

const categories = [
  "All",
  "Web Development",
  "Data Science",
  "Design",
  "Marketing",
  "Business",
];

const AllCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("createdAt"); // 'createdAt', 'price-asc', 'price-desc'
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Desktop: 4 cards * 2 rows

  useEffect(() => {
    document.title = "EducareHub | All Courses";
    setCurrentPage(0); // Reset page when filter changes
  }, [selectedCategory, searchText, sortOption]);

  // Fetch Courses
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courses", selectedCategory, searchText, sortOption, currentPage, itemsPerPage],
    queryFn: () =>
      getAllCourses({
        category: selectedCategory,
        search: searchText,
        sort: sortOption,
        page: currentPage,
        size: itemsPerPage,
      }),
  });

  // Fetch Total Count for Pagination
  const { data: totalCount = 0 } = useQuery({
    queryKey: ["courses-count", selectedCategory, searchText],
    queryFn: () =>
      getCoursesCount({
        category: selectedCategory,
        search: searchText,
      }),
  });

  const numberOfPages = Math.ceil(totalCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  // Handle Search Submit
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.search.value);
  };

  return (
    <div className="py-10 bg-base-100 min-h-screen">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our <span className="text-primary">Courses</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our extensive collection of courses and find the one
            that fits your career goals.
          </p>
        </div>

        {/* --- Filters & Search Bar --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10 bg-base-200 p-6 rounded-xl shadow-sm">
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn btn-sm ${
                  selectedCategory === category
                    ? "btn-primary"
                    : "btn-outline border-gray-400 hover:btn-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            {/* Sort Dropdown */}
            <select
              className="select select-bordered w-full md:w-auto"
              onChange={(e) => setSortOption(e.target.value)}
              value={sortOption}
            >
              <option value="createdAt">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="join w-full md:w-auto">
              <input
                type="text"
                name="search"
                className="input input-bordered join-item w-full"
                placeholder="Search courses..."
              />
              <button type="submit" className="btn btn-primary join-item">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>

        {/* --- Courses Grid --- */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {courses.length > 0 ? (
                courses.map((course) => (
                  <CourseCard key={course._id} course={course} />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold">No courses found!</h3>
                  <p className="text-gray-500">
                    Try changing your search or filter criteria.
                  </p>
                </div>
              )}
            </motion.div>

            {/* --- Pagination Controls --- */}
            {numberOfPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="join">
                  <button
                    className="join-item btn"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 0}
                  >
                    Prev
                  </button>
                  {pages.map((page) => (
                    <button
                      key={page}
                      className={`join-item btn ${
                        currentPage === page ? "btn-primary" : ""
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page + 1}
                    </button>
                  ))}
                  <button
                    className="join-item btn"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === numberOfPages - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default AllCourses;