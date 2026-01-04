import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Container from "../components/Shared/Container";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  useEffect(() => {
    document.title = "EducareHub | Contact Us";
  }, []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // In a real app, you would send this data to your backend
    console.log(data);
    toast.success("Message sent successfully! We will get back to you soon.");
    reset();
  };

  return (
    <div className="bg-base-100 min-h-screen py-10">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card bg-base-200 p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Location</h4>
                    <p className="text-gray-600">123 Education Street, Knowledge City, Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone Number</h4>
                    <p className="text-gray-600">+880 1234 567 890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Address</h4>
                    <p className="text-gray-600">support@educarehub.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-2xl p-8 border border-base-200">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text">Name</span></label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="input input-bordered w-full" 
                    {...register("name", { required: true })} 
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text">Email</span></label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="input input-bordered w-full" 
                    {...register("email", { required: true })} 
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">Email is required</span>}
                </div>
              </div>
              
              <div className="form-control">
                <label className="label"><span className="label-text">Subject</span></label>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  className="input input-bordered w-full" 
                  {...register("subject", { required: true })} 
                />
                {errors.subject && <span className="text-red-500 text-xs mt-1">Subject is required</span>}
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">Message</span></label>
                <textarea 
                  className="textarea w-full textarea-bordered h-32" 
                  placeholder="Your message here..." 
                  {...register("message", { required: true })} 
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs mt-1">Message is required</span>}
              </div>

              <button className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;