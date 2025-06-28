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

import DashboardHeader from '../components/DashboardHeader';
import { DashboardProvider } from '../context/DashboardContext';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: Squares2X2Icon },
    { name: 'Add Product', href: '/dashboard/analysis', icon: PlusIcon },
    { name: 'Market Insight', href: '#', icon: ChartBarIcon },
    { name: 'Price Strategy', href: '#', icon: CurrencyRupeeIcon },
    { name: 'Marketing & Branding', href: '#', icon: GiftIcon },
    { name: 'Logistic Planning', href: '/', icon: TruckIcon },
    { name: 'Report', href: '#', icon: DocumentTextIcon },
    { name: 'Logout', href: '#', icon: PowerIcon },
  ];

  const getTitlefromPath = (path) => {
    if (!path || typeof path !== 'string' || !path.includes('/')) return '';
    const segments = path.split('/');
    const last_segment = segments[segments.length - 1];
    if (last_segment) {
      return last_segment.charAt(0).toUpperCase() + last_segment.slice(1).toLowerCase();
    }
    return '';
  };

  // logout logic
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
      <div className="min-h-screen bg-gray-100">
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-600 bg-white shadow-md"
        >
          <span className="h-6 w-6">☰</span>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 transition-transform duration-200 ease-in-out`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-blue-600">AI Business Analyst</h1>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden">
              <span className="h-6 w-6 text-gray-500">✕</span>
            </button>
          </div>
          <nav className="mt-6 px-4">
            {navigation.map((item) =>
              item.name === 'Logout' ? (
                <button
                  key={item.name}
                  onClick={handleLogout}
                  className="cursor-pointer flex w-full items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 mb-2 transition-all"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 mb-2 transition-all"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-25"
          ></div>
        )}

        <div className="md:ml-64">
          <DashboardHeader title={getTitlefromPath(location.pathname)} />
          <main className="p-6 max-w-7xl mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;
