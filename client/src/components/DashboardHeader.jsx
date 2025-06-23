const DashboardHeader = ({title}) => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <div className="flex items-center space-x-4">
                    <button className="relative inline-block text-gray-600">
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                        <span className="h-6 w-6">🔔</span>
                    </button>
                    <img
                        src="https://i.pravatar.cc/150?img=63"
                        alt="User avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;