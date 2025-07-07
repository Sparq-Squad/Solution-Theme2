import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { useAlert } from "../context/AlertContext";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const { setAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
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
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, {
        name: form.name,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
      });

      setAlert({
        message: res.data.message || "Registration successful",
        type: "success",
      });

      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setAlert({
        message:
          err.response?.data?.message ||
          err.response?.data?.error ||
          "Registration failed",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1117] to-[#1a1d27] px-4"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full space-y-8 p-8 bg-[#161a23] rounded-2xl shadow-2xl border border-yellow-600/20 text-yellow-200"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-yellow-300">Create your account</h2>
          <p className="mt-2 text-sm text-yellow-100">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-yellow-400 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              value={form.name}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f1117] border border-yellow-700 text-yellow-100 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <input
              value={form.email}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f1117] border border-yellow-700 text-yellow-100 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <input
              value={form.password}
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f1117] border border-yellow-700 text-yellow-100 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <input
              value={form.confirmPassword}
              id="password-confirm"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#0f1117] border border-yellow-700 text-yellow-100 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center">
            <input
              checked={form.terms}
              id="terms"
              name="terms"
              type="checkbox"
              required
              onChange={handleChange}
              className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 bg-gray-700 border-gray-500 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-yellow-300">
              I agree to the{" "}
              <a href="#" className="underline hover:text-yellow-400">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-yellow-400">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-md text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-300 transition-transform transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner />
                Creating account...
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#161a23] text-yellow-500">Or sign up with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full py-2 rounded-md bg-[#222] text-yellow-200 border border-yellow-700 hover:bg-[#2d2f39] transition">
              Google
            </button>
            <button className="w-full py-2 rounded-md bg-[#222] text-yellow-200 border border-yellow-700 hover:bg-[#2d2f39] transition">
              GitHub
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RegisterPage;
