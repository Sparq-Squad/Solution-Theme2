import { useState } from 'react';
import StatCard from '../components/StatCard';
import {
      HomeIcon,
    ChartBarIcon,
    CogIcon,
    UserGroupIcon,
    QueueListIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon },
    { name: 'Analytics', href: '#', icon: ChartBarIcon },
    { name: 'Products', href: '#', icon: QueueListIcon },
    { name: 'Audience', href: '#', icon: UserGroupIcon },
    { name: 'Settings', href: '#', icon: CogIcon },
];

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile sidebar toggle */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-600 bg-white shadow-md"
            >
                <Bars3Icon className="h-6 w-6" />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 transition-transform duration-200 ease-in-out`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <h1 className="text-xl font-bold text-indigo-600">AI Business Analyst</h1>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden">
                        <XMarkIcon className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
                <nav className="mt-6 px-4">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 mb-2 transition-all"
                        >
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>

            {/* Overlay when mobile menu is open */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-25"
                ></div>
            )}

            {/* Main content */}
            <div className="md:ml-64">
                {/* Top Navbar */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
                        <div className="flex items-center space-x-4">
                            <button className="relative inline-block text-gray-600">
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.166 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                            <img
                                src="https://i.pravatar.cc/150?img=63"
                                alt="User avatar"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="p-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard title="Total Products" value="124" change="+12% this week" />
                        <StatCard title="Avg. Price" value="$28.99" change="-3% this week" />
                        <StatCard title="Inventory Score" value="87%" change="+5% this week" />
                        <StatCard title="Target Regions" value="14" change="+2 new regions" />
                    </div>

                    {/* Product Table */}
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-800">Recent Products</h3>
                            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img className="h-10 w-10 rounded object-cover" src={product.image} alt={product.name} />
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                                        <div className="text-xs text-gray-500">{product.sku}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.platform}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</a>
                                                <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}


// Dummy Data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        sku: "WH-1234",
        platform: "Amazon",
        price: "29.99",
        image: "https://via.placeholder.com/100",
    },
    {
        id: 2,
        name: "Smart Fitness Tracker",
        sku: "FT-5678",
        platform: "Flipkart",
        price: "49.99",
        image: "https://via.placeholder.com/100",
    },
    {
        id: 3,
        name: "Portable Power Bank",
        sku: "PB-9012",
        platform: "Walmart",
        price: "19.99",
        image: "https://via.placeholder.com/100",
    },
];