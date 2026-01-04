import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllUsers, updateUserRole } from "../../api/lib";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaUserShield, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    document.title = "Dashboard | Manage Users";
  }, []);

  // 1. Fetch all users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  // 2. Mutation to update role
  const mutation = useMutation({
    mutationFn: updateUserRole,
    onSuccess: (data) => {
      if (data.modifiedCount > 0) {
        toast.success("User role updated successfully!");
        queryClient.invalidateQueries(["users"]); // Refresh the list
      }
    },
    onError: (error) => {
      toast.error(`Failed to update role: ${error.message}`);
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to make ${user.name} an Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate({ id: user._id, role: "admin" });
      }
    });
  };

  const handleMakeInstructor = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to make ${user.name} an Instructor?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, Make Instructor",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate({ id: user._id, role: "instructor" });
      }
    });
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Users</h1>
        <div className="badge badge-primary badge-lg gap-2">
          <FaUsers /> Total Users: {users.length}
        </div>
      </div>

      <div className="overflow-x-auto bg-base-100 shadow-xl rounded-xl">
        <table className="table w-full">
          {/* Head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Current Role</th>
              <th className="text-center">Change Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.photoURL || "https://i.ibb.co/5h1f13z/user.png"}
                          alt={user.name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <span className="badge badge-error text-white font-bold">Admin</span>
                  ) : user.role === "instructor" ? (
                    <span className="badge badge-warning text-white font-bold">Instructor</span>
                  ) : (
                    <span className="badge badge-ghost font-bold">Student</span>
                  )}
                </td>
                <td className="flex justify-center gap-2">
                  {/* Make Admin Button */}
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user.role === "admin"}
                    className="btn btn-xs btn-error text-white tooltip tooltip-top"
                    data-tip="Make Admin"
                  >
                    <FaUserShield />
                  </button>

                  {/* Make Instructor Button */}
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user.role === "instructor"}
                    className="btn btn-xs btn-warning text-white tooltip tooltip-top"
                    data-tip="Make Instructor"
                  >
                    <FaChalkboardTeacher />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;