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
        err.response?.data?.error || // support both error formats
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-white to-purple-300 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-2xl"
      >
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <input
              value={form.name}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="input-style"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <input
              value={form.email}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input-style"
              placeholder="Email address"
              onChange={handleChange}
            />
            <input
              value={form.password}
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="input-style"
              placeholder="Password"
              onChange={handleChange}
            />
            <input
              value={form.confirmPassword}
              id="password-confirm"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="input-style"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center">
            <input
              checked={form.terms}
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              onChange={handleChange}
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Privacy Policy
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`cursor-pointer group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 transform hover:scale-[1.02] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="social-button">Google</button>
            <button className="social-button">GitHub</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RegisterPage;


