import { useState } from "react";
import axios from "axios";
import { useAlert } from "../context/AlertContext";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { setAlert } = useAlert();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);
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
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#0f1117]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="max-w-md w-full space-y-8 p-8 bg-[#1a1d27] rounded-2xl shadow-2xl"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Forgot your password?
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your email and we’ll send you a reset link.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Enter your registered email"
              className="appearance-none rounded-md w-full px-4 py-3 border border-[#2c2f38] bg-[#0f1117] placeholder-gray-500 text-white focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 transition"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center py-3 px-4 text-sm font-medium rounded-md text-white transform transition duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 ${
                loading
                  ? "bg-yellow-300/50 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-500"
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

        <div className="text-center mt-6 text-sm text-gray-400">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-yellow-400 hover:text-yellow-300 font-medium transition"
          >
            Sign in
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
