import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { AlertMessage } from "../components/ui/AlertMessage";
import { useAlert } from "../context/AlertContext";

const LoginPage = () => {
  const { setAlert, alert } = useAlert();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        {
          email: form.email,
          password: form.password,
          rememberMe: form.rememberMe,
        },
        { withCredentials: true }
      );

      if (form.rememberMe) {
        localStorage.setItem("rememberMe", res.data.token);
      }

      setAlert({
        message: res.data.message || "Login successful",
        type: "success",
      });

      setTimeout(() => navigate("/dashboard"), 500);
    } catch (err) {
      setAlert({
        message: err.response?.data?.error || "Login failed",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1117] to-[#1a1d27] px-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8 p-8 bg-[#161a23] text-yellow-200 rounded-2xl shadow-2xl border border-yellow-600/20"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold text-yellow-300"
          >
            Sign in to your account
          </motion.h2>
          <p className="mt-2 text-sm text-yellow-100">
            Or{" "}
            <Link
              to="/register"
              className="font-medium text-yellow-400 hover:underline"
            >
              create a new account
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {alert && (
            <AlertMessage
              message={alert.message}
              type={alert.type}
              onClose={() => setAlert(null)}
            />
          )}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={form.email}
                autoComplete="email"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-[#0f1117] border border-yellow-700 text-yellow-100 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                autoComplete="current-password"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-[#0f1117] border border-yellow-700 text-yellow-100 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between"
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={form.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-yellow-500 bg-gray-700 border-gray-500 rounded"
              />
              <span className="ml-2 text-sm text-yellow-300">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-yellow-400 hover:underline"
            >
              Forgot your password?
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              disabled={loading}
              type="submit"
              className={`w-full py-3 px-4 rounded-md text-sm font-medium text-black transition-transform transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                loading
                  ? "bg-yellow-300 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-300"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <LoadingSpinner />
                  Signing in...
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </motion.div>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6"
        >
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-yellow-700" />
            <span className="mx-2 text-sm text-yellow-500">or continue with</span>
            <div className="flex-grow border-t border-yellow-700" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full py-2 rounded-md bg-[#222] text-yellow-200 border border-yellow-700 hover:bg-[#2d2f39] transition">
              Google
            </button>
            <button className="w-full py-2 rounded-md bg-[#222] text-yellow-200 border border-yellow-700 hover:bg-[#2d2f39] transition">
              GitHub
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
