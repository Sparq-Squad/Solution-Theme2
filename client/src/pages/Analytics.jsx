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
  BarChart,
  Bar,
  Cell
} from 'recharts';

const AnalyticsDashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState('tv-products');

  const tvProductsData = [
    {
      brand: "Foxsky",
      model: "32 inch HD Ready LED Smart Android TV",
      screen_size_inch: 32,
      resolution: "HD Ready (1366×768)",
      smart_tv: true,
      os: "Android",
      hdmi_ports: 2,
      usb_ports: 2,
      wifi: true,
      current_price: 7999,
      lowest_price: 6999,
      highest_price: 9000,
      average_price: 8153,
      source: "Flipkart",
      isOurProduct: false
    },
    {
      brand: "Infinix",
      model: "Y1 32 inch HD Ready LED Smart Linux TV",
      screen_size_inch: 32,
      resolution: "HD Ready (1366×768)",
      smart_tv: true,
      os: "Linux",
      hdmi_ports: 2,
      usb_ports: 2,
      wifi: true,
      current_price: 8999,
      lowest_price: 7499,
      highest_price: 8500,
      average_price: 8162,
      source: "Flipkart",
      isOurProduct: false
    },
    {
      brand: "Thomson",
      model: "9A Series 32 inch HD Ready LED Smart TV",
      screen_size_inch: 32,
      resolution: "HD Ready (1366×768)",
      smart_tv: true,
      os: "Linux",
      hdmi_ports: 2,
      usb_ports: 2,
      wifi: true,
      current_price: 8999,
      lowest_price: 6999,
      highest_price: 6999,
      average_price: 6999,
      source: "Flipkart",
      isOurProduct: true
    },
    {
      brand: "iFFALCON by TCL",
      model: "32S3U HD Ready LED Smart TV",
      screen_size_inch: 32,
      resolution: "HD Ready (1366×768)",
      smart_tv: true,
      os: "Android",
      hdmi_ports: 2,
      usb_ports: 1,
      wifi: true,
      current_price: 8999,
      lowest_price: 8999,
      highest_price: 9499,
      average_price: 9085,
      source: "Flipkart",
      isOurProduct: false
    },
    {
      brand: "MarQ by Flipkart",
      model: "32 inch HD Ready LED Smart Coolita TV",
      screen_size_inch: 32,
      resolution: "HD Ready (1366×768)",
      smart_tv: true,
      os: "Coolita (Linux variant)",
      hdmi_ports: 2,
      usb_ports: 1,
      wifi: true,
      current_price: 7799,
      lowest_price: 6499,
      highest_price: 7879,
      average_price: 7280,
      source: "Flipkart",
      isOurProduct: false
    }
  ];

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
    name: '32 inch HD Ready LED Smart Android TV',
    brand: 'Foxsky',
    price: 9000,
    yourPrice: 7999,
    marketPosition: 'competitive',
    rating: 4.2,
    reviews: 1200
  },
  {
    id: 2,
    name: 'Y1 32 inch HD Ready LED Smart Linux TV',
    brand: 'Infinix',
    price: 8500,
    yourPrice: 8999,
    marketPosition: 'overpriced',
    rating: 4.0,
    reviews: 1050
  },
  
  {
    id: 3,
    name: '32S3U HD Ready LED Smart TV',
    brand: 'iFFALCON by TCL',
    price: 9499,
    yourPrice: 8999,
    marketPosition: 'competitive',
    rating: 4.1,
    reviews: 870
  },
  {
    id: 4,
    name: '32 inch HD Ready LED Smart Coolita TV',
    brand: 'MarQ by Flipkart',
    price: 7879,
    yourPrice: 7799,
    marketPosition: 'competitive',
    rating: 4.2,
    reviews: 1100
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

  const marketTrends = [
    { category: 'Electronics', growth: 15.2, color: '#3b82f6' },
    { category: 'Audio', growth: 22.8, color: '#10b981' },
    { category: 'Wireless', growth: 18.6, color: '#f59e0b' },
    { category: 'Premium', growth: 12.4, color: '#ef4444' },
  ];

  const getPositionBadge = (position) => {
    const variants = {
      competitive: 'bg-blue-100 text-blue-800',
      underpriced: 'bg-green-100 text-green-800',
      overpriced: 'bg-red-100 text-red-800',
      budget: 'bg-purple-100 text-purple-800'
    };
    return variants[position] || 'bg-gray-100 text-gray-800';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{data.brand}</p>
          <p className="text-sm text-gray-600 mb-2">{data.model}</p>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">Current Price:</span> ₹{data.current_price.toLocaleString()}
            </p>
            <p className="text-sm">
              <span className="font-medium">Average Price:</span> ₹{data.average_price.toLocaleString()}
            </p>
            <p className="text-sm">
              <span className="font-medium">OS:</span> {data.os}
            </p>
            <p className="text-sm">
              <span className="font-medium">HDMI Ports:</span> {data.hdmi_ports}
            </p>
            {data.isOurProduct && (
              <div className="mt-2 px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                Our Product
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  // SVG icons as React components
  const ArrowTrendingUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
    </svg>
  );

  const ArrowTrendingDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
    </svg>
  );

  const CurrencyDollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
    </svg>
  );

  const LifebuoyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0011.454 2.916 5 5 0 00-4.546-2.916z" clipRule="evenodd" />
    </svg>
  );

  const ShoppingBagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
    </svg>
  );

  const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    </svg>
  );

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gray-800 rounded-lg shadow-sm  border border-gray-700 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Seller Analytics Dashboard</h1>
              <p className="text-gray-600 mt-1">Comprehensive market analysis and forecasting</p>
            </div>
            <div className="w-full md:w-auto">
              <select 
                value={selectedProduct} 
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full md:w-64 h-10 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="tv-products">32" Smart TVs</option>
                <option value="wireless-headphones">Wireless Headphones</option>
                <option value="bluetooth-speakers">Bluetooth Speakers</option>
                <option value="smart-watches">Smart Watches</option>
                <option value="phone-cases">Phone Cases</option>
              </select>
            </div>
          </div>
        </div>

        {/* TV Price Comparison Bar Chart */}
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="text-lg font-semibold">32" Smart TV Price Comparison</h3>
              <p className="text-sm text-gray-600">Current market prices across major brands</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-gray-600">Our Product</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-gray-600">Competitors</span>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={tvProductsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="brand" 
                angle={-45}
                textAnchor="end"
                height={80}
                fontSize={12}
              />
              <YAxis 
                tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`}
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="current_price" 
                radius={[4, 4, 0, 0]}
                name="Current Price"
              >
                {tvProductsData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.isOurProduct ? '#10b981' : '#ef4444'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <ArrowTrendingUpIcon />
              <h4 className="font-medium text-green-900">Market Position Analysis</h4>
            </div>
            <p className="text-sm text-green-800">
              Our Thomson 32" Smart TV is competitively priced at ₹8,999 with the best value proposition in the market. 
              Consider the consistent pricing strategy (lowest = highest = ₹6,999) for better market penetration.
            </p>
          </div>
        </div>

        <div className="p-6 border border-gray-700 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2">
            <h3 className="text-lg font-semibold">Competitive Products</h3>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-sm">
              {competitiveProducts.length} Competitors Found
            </span>
          </div>
          <div className="space-y-4">
            {competitiveProducts.map((product) => (
              <div key={product.id} className="border border-gray-700 rounded-lg p-4 hover:bg-gray-50/10 transition-colors">
                <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium">{product.name}</h4>
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
                      <span className="text-lg font-bold">${product.price}</span>
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

         
        {/* Sales Forecast---> Can be used in different sections
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
        </div> */}

        {/* Market Trends & Revenue Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
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
                    <ArrowTrendingUpIcon />
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue Projection</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Revenue"
                  dot={{ fill: '#3b82f6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div> */}
        </div>

        {/* Action Items */}
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Recommended Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <LifebuoyIcon />
                <h4 className="font-medium text-blue-900 ml-2">Price Optimization</h4>
              </div>
              <p className="text-sm text-blue-800">Consider increasing price by 8-12% based on competitive analysis.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <ChartBarIcon />
                <h4 className="font-medium text-green-900 ml-2">Inventory Planning</h4>
              </div>
              <p className="text-sm text-green-800">Stock up for Q3 - forecast shows 35% increase in demand.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <ShoppingBagIcon />
                <h4 className="font-medium text-purple-900 ml-2">Marketing Focus</h4>
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