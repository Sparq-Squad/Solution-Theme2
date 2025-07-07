const Footer = () => {
  return (
    <footer className="bg-[#0f1117] py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-medium">AI Business Analyst</span>. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
