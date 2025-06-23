import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area 
} from 'recharts';

import {
      HomeIcon,
    ChartBarIcon,
    CogIcon,
    UserGroupIcon,
    QueueListIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    CurrencyDollarIcon,
    LifebuoyIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Analytics', href: '/analysis', icon: ChartBarIcon },
    { name: 'Products', href: '#', icon: QueueListIcon },
    { name: 'Audience', href: '#', icon: UserGroupIcon },
    { name: 'Settings', href: '#', icon: CogIcon },
];


const AnalyticsDashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState('wireless-headphones');

  const keyMetrics = [
    {
      title: 'Estimated Revenue',
      value: '$12,485',
      change: '+18%',
      trend: 'up',
      period: 'this month'
    },
    {
      title: 'Market Share',
      value: '23.4%',
      change: '+2.1%',
      trend: 'up',
      period: 'vs last quarter'
    },
    {
      title: 'Avg. Selling Price',
      value: '$89.99',
      change: '-5%',
      trend: 'down',
      period: 'this week'
    },
    {
      title: 'Conversion Rate',
      value: '4.2%',
      change: '+0.8%',
      trend: 'up',
      period: 'this month'
    }
  ];

  const competitiveProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      brand: 'TechSound',
      price: 129.99,
      yourPrice: 89.99,
      marketPosition: 'competitive',
      rating: 4.5,
      reviews: 2340,
      availability: 'In Stock'
    },
    {
      id: 2,
      name: 'Pro Audio Headphones',
      brand: 'SoundMax',
      price: 159.99,
      yourPrice: 89.99,
      marketPosition: 'underpriced',
      rating: 4.3,
      reviews: 1876,
      availability: 'Low Stock'
    },
    {
      id: 3,
      name: 'Bluetooth Elite Headphones',
      brand: 'AudioPro',
      price: 79.99,
      yourPrice: 89.99,
      marketPosition: 'overpriced',
      rating: 4.1,
      reviews: 956,
      availability: 'In Stock'
    },
    {
      id: 4,
      name: 'Studio Quality Headphones',
      brand: 'MusicTech',
      price: 199.99,
      yourPrice: 89.99,
      marketPosition: 'budget',
      rating: 4.7,
      reviews: 3421,
      availability: 'In Stock'
    }
  ];

  const forecastData = [
    { month: 'Jan', sales: 120, revenue: 10800, forecast: 135 },
    { month: 'Feb', sales: 135, revenue: 12150, forecast: 148 },
    { month: 'Mar', sales: 165, revenue: 14850, forecast: 172 },
    { month: 'Apr', sales: 142, revenue: 12780, forecast: 158 },
    { month: 'May', sales: 198, revenue: 17820, forecast: 215 },
    { month: 'Jun', sales: 234, revenue: 21060, forecast: 248 },
    { month: 'Jul', sales: 0, revenue: 0, forecast: 285 },
    { month: 'Aug', sales: 0, revenue: 0, forecast: 312 },
    { month: 'Sep', sales: 0, revenue: 0, forecast: 295 },
  ];

  // Price distribution data
  const priceDistribution = [
    { range: '$0-50', count: 12, percentage: 20 },
    { range: '$51-100', count: 28, percentage: 47 },
    { range: '$101-150', count: 15, percentage: 25 },
    { range: '$151-200', count: 3, percentage: 5 },
    { range: '$200+', count: 2, percentage: 3 },
  ];

  // Market trends data
  const marketTrends = [
    { category: 'Electronics', growth: 15.2, color: '#3b82f6' },
    { category: 'Audio', growth: 22.8, color: '#10b981' },
    { category: 'Wireless', growth: 18.6, color: '#f59e0b' },
    { category: 'Premium', growth: 12.4, color: '#ef4444' },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  const getPositionBadge = (position) => {
    const variants = {
      competitive: 'bg-blue-100 text-blue-800',
      underpriced: 'bg-green-100 text-green-800',
      overpriced: 'bg-red-100 text-red-800',
      budget: 'bg-purple-100 text-purple-800'
    };
    return variants[position] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Seller Analytics Dashboard</h1>
              <p className="text-gray-600 mt-1">Comprehensive market analysis and forecasting</p>
            </div>
            <div className="w-full md:w-auto">
              <select 
                value={selectedProduct} 
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full md:w-64 h-10 border border-gray-300 rounded-md bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="wireless-headphones">Wireless Headphones</option>
                <option value="bluetooth-speakers">Bluetooth Speakers</option>
                <option value="smart-watches">Smart Watches</option>
                <option value="phone-cases">Phone Cases</option>
              </select>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
                  <div className="flex items-center mt-2">
                    {metric.trend === 'up' ? (
                      <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowTrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">{metric.period}</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <CurrencyDollarIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2">
              <h3 className="text-lg font-semibold text-gray-900">Competitive Products</h3>
              <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-sm">
                4 Competitors Found
              </span>
            </div>
            <div className="space-y-4">
              {competitiveProducts.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.brand}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-600">
                        <span className="flex items-center">
                          ⭐ {product.rating} ({product.reviews} reviews)
                        </span>
                        <span className="mx-2 hidden md:inline">•</span>
                        <span className="mt-1 md:mt-0">{product.availability}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getPositionBadge(product.marketPosition)}`}>
                          {product.marketPosition}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Your price: ${product.yourPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Price Distribution Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={priceDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ range, percentage }) => `${range} (${percentage}%)`}
                >
                  {priceDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales Forecast */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sales Forecast & Performance</h3>
              <p className="text-sm text-gray-600">Historical data vs projected sales for selected product</p>
            </div>
            <span className="bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full text-sm">
              ↗ 23% Growth Projected
            </span>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#3b82f6" 
                strokeWidth={3}
                name="Actual Sales"
                dot={{ fill: '#3b82f6', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="forecast" 
                stroke="#10b981" 
                strokeWidth={3}
                strokeDasharray="8 8"
                name="Forecast"
                dot={{ fill: '#10b981', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Market Trends & Revenue Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Market Growth Trends</h3>
            <div className="space-y-4">
              {marketTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: trend.color }}
                    ></div>
                    <span className="font-medium text-gray-900">{trend.category}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-medium">+{trend.growth}%</span>
                    <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue Projection</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Items */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recommended Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <LifebuoyIcon className="w-5 h-5 text-blue-600 mr-2" />
                <h4 className="font-medium text-blue-900">Price Optimization</h4>
              </div>
              <p className="text-sm text-blue-800">Consider increasing price by 8-12% based on competitive analysis.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <ChartBarIcon className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-medium text-green-900">Inventory Planning</h4>
              </div>
              <p className="text-sm text-green-800">Stock up for Q3 - forecast shows 35% increase in demand.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <ShoppingBagIcon className="w-5 h-5 text-purple-600 mr-2" />
                <h4 className="font-medium text-purple-900">Marketing Focus</h4>
              </div>
              <p className="text-sm text-purple-800">Target premium segment - 22% growth opportunity identified.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;