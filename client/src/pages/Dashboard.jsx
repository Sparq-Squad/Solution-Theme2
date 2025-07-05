import { useState } from 'react';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import axios from 'axios';

import {
  Squares2X2Icon,
  ChartBarIcon,
  PlusIcon,
  PowerIcon,
  DocumentTextIcon,
  TruckIcon,
  GiftIcon,
  CurrencyRupeeIcon,
} from '@heroicons/react/24/outline';
import { DashboardProvider } from '../context/DashboardContext';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: Squares2X2Icon },
    { name: 'Add Product', href: '/dashboard/add-product', icon: PlusIcon },
    { name: 'Market Insight', href: '/dashboard/market-insight', icon: ChartBarIcon },
    { name: 'Price Strategy', href: '/dashboard/price-strategy', icon: CurrencyRupeeIcon },
    { name: 'Marketing & Branding', href: '/dashboard/market-branding', icon: GiftIcon },
    { name: 'Logistic Planning', href: '/dashboard/logistic-planning', icon: TruckIcon },
    { name: 'Report', href: '/dashboard/report', icon: DocumentTextIcon },
    { name: 'Logout', href: '#', icon: PowerIcon },
  ];

  const getTitleFromPath = (path) =>
    navigation.find((item) => item.href === path)?.name || 'Dashboard';

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/logout`, {}, { withCredentials: true });
      localStorage.removeItem('rememberMe');
      navigate('/');
    } catch (err) {
      console.error('Logout Error:', err);
    }
  };

  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-gray-300 shadow-lg"
        >
          <span className="h-6 w-6">☰</span>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 shadow-xl transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-200 ease-in-out`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700">
            <h1 className="text-xl font-bold text-yellow-400">AI Business Analyst</h1>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
              <span className="h-6 w-6">×</span>
            </button>
          </div>

          <nav className="mt-4 px-3 space-y-1">
            {navigation.map((item) =>
              item.name === 'Logout' ? (
                <button
                  key={item.name}
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-900/30 hover:text-red-300 transition-all"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-yellow-900/30 hover:text-yellow-300 transition-all ${
                    location.pathname === item.href ? 'bg-yellow-900/40 text-yellow-300' : ''
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          ></div>
        )}

        {/* Main Content */}
        <div className="md:ml-64 min-h-screen">
          <main className="p-6 max-w-7xl mx-auto min-h-screen">
            <Outlet />
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;