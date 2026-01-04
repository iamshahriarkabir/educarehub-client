import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCourse } from "../../api/lib";
import { imageUpload } from "../../api/utils"; // আমাদের নতুন হেল্পার ফাংশন
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddCourse = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [uploading, setUploading] = useState(false); // আপলোডিং লোডার স্টেট

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Dashboard | Add Course";
  }, []);

  const mutation = useMutation({
    mutationFn: addCourse,
    onSuccess: () => {
      toast.success("Course added successfully!");
      queryClient.invalidateQueries(["my-added-courses", user?.email]);
      reset();
      navigate("/dashboard/my-added-courses");
    },
    onError: (error) => {
      toast.error(`Failed to add course: ${error.message}`);
      setUploading(false);
    },
  });

  const onSubmit = async (data) => {
    setUploading(true);
    try {
      // ১. ইমেজ আপলোড করা
      const imageFile = data.image[0];
      const imageUrl = await imageUpload(imageFile);

      // ২. ডেটা প্রিপেয়ার করা
      const courseData = {
        title: data.title,
        imageUrl: imageUrl, // ImgBB থেকে পাওয়া লিংক
        price: parseFloat(data.price),
        duration: data.duration,
        category: data.category,
        description: data.description,
        isFeatured: data.isFeatured === "true",
        instructorName: user?.displayName,
        instructorEmail: user?.email,
        instructorPhoto: user?.photoURL,
        totalEnrollments: 0, // শুরুতে এনরোলমেন্ট ০
        rating: 0, // শুরুতে রেটিং ০
      };

      // ৩. সার্ভারে পাঠানো
      mutation.mutate(courseData);
    } catch (error) {
      console.error(error);
      toast.error("Image upload failed!");
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-base-100 p-8 rounded-xl shadow-lg my-10">
      <h1 className="text-3xl font-bold mb-2 text-center text-primary">
        Add a New Course
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Fill out the form below to create a new course for students.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Course Title</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Complete Web Development Bootcamp"
            {...register("title", { required: true })}
            className="input input-bordered w-full focus:input-primary"
          />
          {errors.title && (
            <span className="text-red-500 text-sm mt-1">Title is required.</span>
          )}
        </div>

        {/* Image Upload & Price Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image File Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Course Thumbnail</span>
            </label>
            <div className="relative border-dashed border-2 border-primary rounded-lg p-4 hover:bg-base-200 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered file-input-primary w-full"
                />
            </div>
            {errors.image && (
              <span className="text-red-500 text-sm mt-1">Image is required.</span>
            )}
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price ($)</span>
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="0.00"
              {...register("price", { required: true, min: 0 })}
              className="input input-bordered w-full focus:input-primary"
            />
            {errors.price && (
              <span className="text-red-500 text-sm mt-1">Valid price required.</span>
            )}
          </div>
        </div>

        {/* Duration & Category Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Duration</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 12 Weeks"
              {...register("duration", { required: true })}
              className="input input-bordered w-full focus:input-primary"
            />
            {errors.duration && (
              <span className="text-red-500 text-sm mt-1">Duration required.</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full focus:select-primary"
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Business">Business</option>
            </select>
            {errors.category && (
              <span className="text-red-500 text-sm mt-1">Category required.</span>
            )}
          </div>
        </div>

        {/* Featured Selection */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Make this course Featured?</span>
          </label>
          <select
            {...register("isFeatured")}
            className="select select-bordered w-full focus:select-primary"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Write a detailed description of the course..."
            className="textarea textarea-bordered w-full h-32 focus:textarea-primary"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm mt-1">Description required.</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full text-lg"
          disabled={uploading || mutation.isLoading}
        >
          {uploading || mutation.isLoading ? (
            <span className="flex items-center gap-2">
              <span className="loading loading-spinner"></span>
              {uploading ? "Uploading Image..." : "Saving Course..."}
            </span>
          ) : (
            <>
              <FaCloudUploadAlt className="text-xl" /> Add Course
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;