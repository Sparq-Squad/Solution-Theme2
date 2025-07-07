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
      <div className="min-h-screen bg-gradient-to-b from-[#0f1117] to-[#1a1d27] text-yellow-200">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#161a23] text-yellow-300 shadow-lg"
        >
          <span className="text-xl">☰</span>
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#121929] border-r border-gray-700 shadow-xl transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-200 ease-in-out`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700">
            <h1 className="text-xl font-bold text-yellow-400">AI Business Analyst</h1>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-yellow-300 text-2xl">
              ×
            </button>
          </div>

          <nav className="mt-4 px-3 space-y-1">
            {navigation.map((item) =>
              item.name === 'Logout' ? (
                <button
                  key={item.name}
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-300 hover:bg-red-900/30 hover:text-red-200 transition-all"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-yellow-900/40 text-yellow-300 border border-yellow-400'
                      : 'text-gray-400 hover:bg-yellow-900/20 hover:text-yellow-200 hover:border-yellow-500 border border-transparent'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            )}
          </nav>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          />
        )}

        {/* Main Content */}
        <main className="md:ml-64 px-4 py-6 max-w-7xl mx-auto min-h-screen">
          <Outlet />
        </main>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;
