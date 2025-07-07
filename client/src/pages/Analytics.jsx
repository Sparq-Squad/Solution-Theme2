import React, { useState } from 'react';
import CustomDropdown from '../components/ui/CustomDropdown.jsx';
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
      <div className="bg-[#1f232e] border border-yellow-500 text-yellow-100 rounded-lg p-4 shadow-xl min-w-[220px]">
        <p className="font-semibold text-yellow-300 text-base">{data.brand}</p>
        <p className="text-sm text-gray-400 mb-2">{data.model}</p>
        <div className="space-y-1 text-sm">
          <p>
            <span className="text-yellow-400 font-medium">Current Price:</span>{" "}
            ₹{data.current_price.toLocaleString()}
          </p>
          <p>
            <span className="text-yellow-400 font-medium">Average Price:</span>{" "}
            ₹{data.average_price.toLocaleString()}
          </p>
          <p>
            <span className="text-yellow-400 font-medium">OS:</span> {data.os}
          </p>
          <p>
            <span className="text-yellow-400 font-medium">HDMI Ports:</span> {data.hdmi_ports}
          </p>
          {data.isOurProduct && (
            <div className="mt-2 inline-block px-2 py-1 bg-green-700/20 border border-green-400 text-green-300 rounded text-xs font-medium">
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
  <div className="min-h-screen p-4 sm:p-6 bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] text-[#f3f3f3]">
    <div className="max-w-full md:max-w-7xl mx-auto space-y-6">

      {/* Header */}
      <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg shadow-xl border border-[#2c2f38] p-4 sm:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-yellow-400">Seller Analytics Dashboard</h1>
            <p className="text-gray-400 mt-1 text-sm">Comprehensive market analysis and forecasting</p>
          </div>
<div className="w-full max-w-sm mx-auto px-4 sm:px-0">
  <CustomDropdown selected={selectedProduct} setSelected={setSelectedProduct} />
</div>


        </div>
      </div>

      {/* Bar Chart */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] border border-[#2c2f38] rounded-lg shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-yellow-400">32&quot; Smart TV Price Comparison</h3>
            <p className="text-sm text-gray-400">Current market prices across major brands</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span className="text-gray-400">Our Product</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-gray-400">Competitors</span>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={tvProductsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2c2f38" />
            <XAxis 
              dataKey="brand" 
              angle={-45} 
              textAnchor="end" 
              height={80} 
              tick={{ fill: "#facc15", fontSize: 12 }} 
            />
            <YAxis 
              tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`}
              tick={{ fill: "#facc15", fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="current_price" radius={[4, 4, 0, 0]} name="Current Price">
              {tvProductsData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.isOurProduct ? "#facc15" : "#ef4444"} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-4 p-4 bg-[#1e222d] border border-yellow-500 rounded-lg">
          <div className="flex items-center gap-2 mb-2 text-yellow-300">
            <ArrowTrendingUpIcon />
            <h4 className="font-medium">Market Position Analysis</h4>
          </div>
          <p className="text-sm text-yellow-100">
            Our Thomson 32&quot; Smart TV is competitively priced at ₹8,999 with the best value proposition in the market. 
            Consider the consistent pricing strategy (lowest = highest = ₹6,999) for better market penetration.
          </p>
        </div>
      </div>

      {/* Competitor Cards */}
      <div className="p-4 sm:p-6 border border-[#2c2f38] bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
          <h3 className="text-lg font-semibold text-yellow-400">Competitive Products</h3>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm border border-yellow-200">
            {competitiveProducts.length} Competitors Found
          </span>
        </div>
        <div className="space-y-4">
          {competitiveProducts.map((product) => (
<div
  key={product.id}
  className="border border-gray-700 bg-[#0f1117] rounded-lg p-4 hover:bg-[#1a1d27] hover:border-amber-500 transition-all duration-300 hover:shadow-[0_0_10px_#f59e0b50]"
>
  <div className="flex flex-col md:flex-row items-start justify-between gap-4">
    {/* Left Section */}
    <div className="flex-1">
      <h4 className="font-medium text-yellow-200">{product.name}</h4>
      <p className="text-sm text-gray-400">{product.brand}</p>
      <div className="flex items-center mt-2 text-sm text-yellow-300">
        <span>⭐ {product.rating} ({product.reviews} reviews)</span>
      </div>
    </div>

    {/* Right Section */}
    <div className="text-left md:text-right">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 mb-2">
        <span className="text-lg font-bold text-yellow-300">
          ₹{product.price}
        </span>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${getPositionBadge(product.marketPosition)}`}
        >
          {product.marketPosition}
        </span>
      </div>
      <p className="text-sm text-gray-400">
        Your price: <span className="text-yellow-200">₹{product.yourPrice}</span>
      </p>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>

      {/* Action Cards */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] border border-[#2c2f38] rounded-lg shadow-xl">
        <h3 className="text-lg font-semibold text-yellow-400 mb-6">Recommended Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-[#1e2a3a] border border-blue-500 rounded-lg p-4">
            <div className="flex items-center mb-3 text-blue-300">
              <LifebuoyIcon />
              <h4 className="font-medium ml-2">Price Optimization</h4>
            </div>
            <p className="text-sm text-blue-200">Consider increasing price by 8-12% based on competitive analysis.</p>
          </div>
          <div className="bg-[#1c2f29] border border-green-500 rounded-lg p-4">
            <div className="flex items-center mb-3 text-green-300">
              <ChartBarIcon />
              <h4 className="font-medium ml-2">Inventory Planning</h4>
            </div>
            <p className="text-sm text-green-200">Stock up for Q3 - forecast shows 35% increase in demand.</p>
          </div>
          <div className="bg-[#2a1e3a] border border-purple-500 rounded-lg p-4">
            <div className="flex items-center mb-3 text-purple-300">
              <ShoppingBagIcon />
              <h4 className="font-medium ml-2">Marketing Focus</h4>
            </div>
            <p className="text-sm text-purple-200">Target premium segment - 22% growth opportunity identified.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
);


};

export default AnalyticsDashboard;