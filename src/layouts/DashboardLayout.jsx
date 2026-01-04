import { NavLink, Outlet } from "react-router";
import {
  FaHome,
  FaList,
  FaPlusCircle,
  FaBook,
  FaBars,
  FaUsers,
  FaUserCog,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole"; // আমাদের নতুন হুক

const DashboardLayout = () => {
  const { user } = useAuth();
  const [role, isRoleLoading] = useRole(); // সার্ভার থেকে রোল আনা হচ্ছে

  // লোডিং অবস্থায় কিছু দেখাবে না বা স্পিনার দেখাতে পারেন
  if (isRoleLoading) return <div className="text-center mt-20">Loading Dashboard...</div>;

  const dashboardNavLinks = (
    <>
      {/* ================= STUDENT MENU ================= */}
      {role === "student" && (
        <li>
          <NavLink
            to="/dashboard/my-enrolled"
            className={({ isActive }) =>
              isActive ? "bg-primary text-white font-bold" : "font-semibold"
            }
          >
            <FaList /> My Enrolled Courses
          </NavLink>
        </li>
      )}

      {/* ================= INSTRUCTOR MENU ================= */}
      {role === "instructor" && (
        <>
          <li>
            <NavLink
              to="/dashboard/add-course"
              className={({ isActive }) =>
                isActive ? "bg-primary text-white font-bold" : "font-semibold"
              }
            >
              <FaPlusCircle /> Add Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-added-courses"
              className={({ isActive }) =>
                isActive ? "bg-primary text-white font-bold" : "font-semibold"
              }
            >
              <FaBook /> My Added Courses
            </NavLink>
          </li>
        </>
      )}

      {/* ================= ADMIN MENU (FUTURE) ================= */}
      {role === "admin" && (
        <li>
          <NavLink
            to="/dashboard/all-users"
            className={({ isActive }) =>
              isActive ? "bg-primary text-white font-bold" : "font-semibold"
            }
          >
            <FaUsers /> Manage Users
          </NavLink>
        </li>
      )}

      <div className="divider"></div>

      {/* ================= SHARED MENU ================= */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white font-bold" : "font-semibold"
          }
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white font-bold" : "font-semibold"
          }
        >
          <FaList /> All Courses
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* --- Main Content --- */}
      <div className="drawer-content flex flex-col">
        {/* Navbar for Mobile */}
        <div className="w-full navbar bg-base-100 lg:hidden sticky top-0 z-40 shadow-md">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <FaBars className="w-6 h-6" />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-lg font-bold text-primary">
            EducareHub Dashboard
          </div>
        </div>
        
        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 bg-base-200 min-h-screen">
          <Outlet />
        </main>
      </div>

      {/* --- Sidebar --- */}
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content border-r border-base-300">
          
          {/* User Profile Info in Sidebar */}
          <div className="flex flex-col items-center justify-center p-6 mb-6 bg-base-200 rounded-lg">
            <div className="avatar online">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={user?.photoURL || "https://i.ibb.co/5h1f13z/user.png"} // Fallback image added
                  alt="User"
                />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-bold">{user?.displayName}</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">
              {role || "Student"}
            </p>
          </div>

          {/* Nav Links */}
          <div className="space-y-2">
            {dashboardNavLinks}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;