import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-purple-600 text-center">
      <h1 className="text-6xl font-bold text-white mb-4 animate-bounce">
        404
      </h1>
      <p className="text-3xl text-white mb-8 animate-pulse">
        Oops! Page not found
      </p>
      <button 
        className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 animate-bounce"
        onClick={redirectToHome}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Page404;
