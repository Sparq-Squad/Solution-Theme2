const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-xl font-bold text-indigo-600">AI Business Analyst</div>
                    <nav className="space-x-8 hidden md:flex">
                        <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
                        <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How It Works</a>
                        <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
                        <a href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <a href="/login" className="text-gray-600 hover:text-indigo-600">Login</a>
                        <a href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Register</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;