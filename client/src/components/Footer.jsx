const Footer = () => {
    return (
        <footer className="bg-white py-8 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} AI Business Analyst. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">Contact Us</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;