import { Link, useRouteError } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

const ErrorPage = () => {
  const error = useRouteError();

  useEffect(() => {
    document.title = "EducareHub | 404 Error";
  }, []);

  return (
    <section className="flex items-center h-screen bg-base-100 text-base-content">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img 
            src="https://i.ibb.co/vzD7j0N/404.png" 
            alt="404 Error" 
            className="w-full max-w-xs mx-auto mb-8"
          />
          <h2 className="mb-4 font-bold text-3xl">
            Page Not Found
          </h2>
          <p className="text-gray-500 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed or renamed.
          </p>
          <Link to="/" className="btn btn-primary">
            <FaArrowLeft className="mr-2" /> Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;