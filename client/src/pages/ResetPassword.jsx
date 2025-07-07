import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAlert } from "../context/AlertContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { motion } from "framer-motion";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { setAlert } = useAlert();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);

    try {
      setLoading(true);
      const res = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/user/resetPassword/${token}`,
        {
          password: form.password,
          confirmPassword: form.confirmPassword,
        }
      );

      setAlert({
        message: res.data.message || "Password reset successful",
        type: "success",
      });

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setAlert({
        message:
          err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to reset password",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#0f1117]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full space-y-8 p-8 bg-[#1a1d27] rounded-2xl shadow-2xl"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">
            🔐 Reset Your Password
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your new password to regain access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="space-y-4">
            <input
              name="password"
              type="password"
              placeholder="New Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#2c2f38] bg-[#0f1117] placeholder-gray-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 text-sm transition"
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm New Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#2c2f38] bg-[#0f1117] placeholder-gray-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 text-sm transition"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className={`w-full py-3 px-4 font-medium rounded-md text-white transform transition duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 ${
              loading
                ? "bg-yellow-300/50 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner />
                Resetting...
              </div>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-400">
          <Link
            to="/login"
            className="text-yellow-400 hover:text-yellow-300 font-medium transition"
          >
            🔙 Back to login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
