import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosInstance from "../api/axios";

const useRole = () => {
  const { user, loading } = useAuth();

  const { data: userRole, isLoading: isRoleLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/users/${user.email}`);
      return data.role; // সার্ভার থেকে 'admin', 'instructor', বা 'student' আসবে
    },
  });

  return [userRole, isRoleLoading];
};

export default useRole;