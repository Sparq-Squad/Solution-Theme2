const Header = () => {
  return (
    <header className="bg-[#0f1117] shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-yellow-400">AI Business Analyst</div>
          
          {/* Navigation Links */}
          <nav className="space-x-8 hidden md:flex">
            <a
              href="#features"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Testimonials
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/login"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
