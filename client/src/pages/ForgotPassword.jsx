import { useState } from "react";
import axios from "axios";
import { useAlert } from "../context/AlertContext";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const ForgotPassword = () => {
  const { setAlert } = useAlert();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null); // Clear previous alerts
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/forgotPassword`,
        { email }
      );

      setAlert({
        message: res.data.message || "Password reset link sent successfully",
        type: "success",
      });

      setEmail("");
    } catch (err) {
      setAlert({
        message: err.response?.data?.message || "Password reset failed",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Forgot your password?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email and we’ll send you a reset link.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Enter your registered email"
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white transform transition duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  Sending Link...
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          Remember your password?{" "}
          <a
            href="/login"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Sign in
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
