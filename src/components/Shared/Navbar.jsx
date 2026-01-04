import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import ThemeToggle from "../ThemeToggle";
import { FaBookReader, FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "font-semibold hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "font-semibold hover:text-primary"
          }
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/teach"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "font-semibold hover:text-primary"
          }
        >
          Teach on EducareHub
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "font-semibold hover:text-primary"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "font-semibold hover:text-primary"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-base-200">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="flex gap-2 items-center normal-case text-2xl font-bold text-primary"
          >
            <FaBookReader className="text-3xl" /> 
            <span className="hidden sm:inline">EducareHub</span>
          </Link>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
        </div>
        
        <div className="navbar-end space-x-4">
          <ThemeToggle />
          
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar border border-primary/20 hover:border-primary transition-all">
                <div className="w-10 rounded-full" title={user?.displayName}>
                  <img 
                    src={user?.photoURL || "https://i.ibb.co/5h1f13z/user.png"} 
                    alt="User Profile" 
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-xl w-56 border border-base-200"
              >
                <li className="px-4 py-3 border-b border-base-200">
                  <p className="font-bold text-lg">{user?.displayName}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </li>
                <li className="mt-2">
                  <Link to="/dashboard/my-enrolled" className="justify-between">
                    Dashboard
                    <span className="badge badge-primary badge-sm">New</span>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut} className="text-red-500 font-medium">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button className="btn btn-outline btn-primary btn-sm px-6">Login</button>
              </Link>
              <Link to="/register" className="hidden sm:inline-flex">
                <button className="btn btn-primary btn-sm px-6 text-white">Join Free</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;