import axiosInstance from "./axios";

// =================================================================
//                         COURSE API CALLS
// =================================================================

export const getAllCourses = async ({ category, search, sort, page, size }) => {
  const queryParams = new URLSearchParams({
    category: category === "All" ? "" : category || "",
    search: search || "",
    sort: sort || "",
    page: page || 0,
    size: size || 10,
  }).toString();

  const { data } = await axiosInstance.get(`/courses?${queryParams}`);
  return data;
};

export const getCoursesCount = async ({ category, search }) => {
  const queryParams = new URLSearchParams({
    category: category === "All" ? "" : category || "",
    search: search || "",
  }).toString();
  
  const { data } = await axiosInstance.get(`/courses-count?${queryParams}`);
  return data.count;
};

export const getFeaturedCourses = async () => {
  const { data } = await axiosInstance.get("/courses?featured=true");
  return data;
};

export const getCourseById = async (id) => {
  const { data } = await axiosInstance.get(`/courses/${id}`);
  return data;
};

export const getMyAddedCourses = async (email) => {
  const { data } = await axiosInstance.get(`/my-courses/${email}`);
  return data;
};

export const addCourse = async (courseData) => {
  const { data } = await axiosInstance.post("/courses", courseData);
  return data;
};

export const updateCourse = async ({ id, courseData }) => {
  const { data } = await axiosInstance.put(`/courses/${id}`, courseData);
  return data;
};

export const deleteCourse = async (id) => {
  const { data } = await axiosInstance.delete(`/courses/${id}`);
  return data;
};

// =================================================================
//                       ENROLLMENT API CALLS
// =================================================================

export const createEnrollment = async (enrollmentData) => {
  const { data } = await axiosInstance.post("/enrollments", enrollmentData);
  return data;
};

export const getMyEnrollments = async (email) => {
  const { data } = await axiosInstance.get(`/my-enrollments/${email}`);
  return data;
};

// =================================================================
//                          USER API CALLS
// =================================================================

export const saveUser = async (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    role: "student",
  };
  const { data } = await axiosInstance.post("/users", currentUser);
  return data;
};

// 1. Get All Users (Admin)
export const getAllUsers = async () => {
  const { data } = await axiosInstance.get("/users");
  return data;
};

// 2. Update User Role (Admin)
export const updateUserRole = async ({ id, role }) => {
  const { data } = await axiosInstance.patch(`/users/role/${id}`, { role });
  return data;
};