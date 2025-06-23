import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import {
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  QueueListIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Input from '../components/ui/Input';
import Label from '../components/ui/Label';
import Button from '../components/ui/Button';
import AddProductForm from '../components/AddProductform';
import ProductTable from '../components/ProductTable';

const StatCard = ({ title, value, change }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <h3 className="text-base font-medium text-gray-600">{title}</h3>
    <div className="mt-2 flex items-baseline">
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <span className="ml-2 text-sm font-medium text-green-600">{change}</span>
    </div>
  </div>
);

// Main Dashboard Component
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon },
    { name: 'Analytics', href: '#', icon: ChartBarIcon },
    { name: 'Products', href: '#', icon: QueueListIcon },
    { name: 'Audience', href: '#', icon: UserGroupIcon },
    { name: 'Settings', href: '#', icon: CogIcon },
    { name: 'Logout', href: '/', icon: ArrowRightOnRectangleIcon },
  ];



// very insecure cookie deletion ; don't do this from next time
// try this logic in backend only
const handleLogout = async () => {
  try {
    // Call the backend to clear the HttpOnly cookie securely
    await axios.post('http://localhost:5000/user/logout', {}, {
      withCredentials: true, // important: sends cookies
    });
    localStorage.removeItem('rememberMe');
    navigate('/');
  } catch (err) {
    console.error('Logout Error:', err);
  }
};

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
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
          (  item.name === 'Logout' ? (
        <button
        key={item.name}
        onClick={handleLogout}
        className="cursor-pointer flex w-full items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 mb-2 transition-all"
      >
        <item.icon className="h-5 w-5" />
        <span>{item.name}</span>
      </button>
          ):(
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 mb-2 transition-all"
            >
              <item.icon className="h-5 w-5" /> {/* Fixed: Render as component */}
              <span>{item.name}</span>
            </a>
          )))
          }
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

        <main className="p-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Products" value="124" change="+12% this week" />
            <StatCard title="Avg. Price" value="$28.99" change="-3% this week" />
            <StatCard title="Inventory Score" value="87%" change="+5% this week" />
            <StatCard title="Target Regions" value="14" change="+2 new regions" />
          </div>

          <AddProductForm onAddProduct={handleAddProduct} />
          <ProductTable products={products} onDeleteProduct={handleDeleteProduct} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;