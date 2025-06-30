import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAlert } from "../context/AlertContext";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { motion } from "framer-motion";
import { AlertMessage } from "../components/ui/AlertMessage";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { alert, setAlert } = useAlert(); 

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-white to-purple-300 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full space-y-8 p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl transition-all duration-300"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🔐 Reset Your Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter a new password to regain access.
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
              className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm transition duration-200"
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm New Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm transition duration-200"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className={`w-full py-3 px-4 text-white font-medium rounded-md transition duration-200 transform hover:scale-[1.02] ${
              loading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
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

        <div className="text-center mt-6 text-sm text-gray-600">
          <a
            href="/login"
            className="text-indigo-600 hover:text-indigo-500 font-medium transition duration-200"
          >
            🔙 Back to login
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
