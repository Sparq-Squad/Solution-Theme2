import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const PriceStrategy = () => {
  const [currentPrice, setCurrentPrice] = useState('89.99');
  const [targetPrice, setTargetPrice] = useState('');

  const priceHistory = [
    { date: '2024-01', price: 85, sales: 120, revenue: 10200 },
    { date: '2024-02', price: 87, sales: 115, revenue: 10005 },
    { date: '2024-03', price: 89, sales: 125, revenue: 11125 },
    { date: '2024-04', price: 92, sales: 110, revenue: 10120 },
    { date: '2024-05', price: 89, sales: 135, revenue: 12015 },
    { date: '2024-06', price: 89.99, sales: 142, revenue: 12778 },
  ];

  const competitorPricing = [
    { brand: 'TechSound Pro', price: 129.99, position: 'Premium' },
    { brand: 'SoundMax Elite', price: 159.99, position: 'Premium' },
    { brand: 'AudioPro Basic', price: 79.99, position: 'Budget' },
    { brand: 'PremiumSound X1', price: 199.99, position: 'Luxury' },
    { brand: 'BudgetBeats V2', price: 49.99, position: 'Budget' },
    { brand: 'Your Product', price: 89.99, position: 'Mid-range' },
  ].sort((a, b) => a.price - b.price);

  const pricingStrategies = [
    {
      name: 'Competitive Pricing',
      price: 85.99,
      impact: 'Medium',
      pros: ['Match competitor prices', 'Maintain market share'],
      cons: ['Lower profit margins', 'Price war risk'],
      recommendation: 'Recommended for stable market position'
    },
    {
      name: 'Premium Positioning',
      price: 119.99,
      impact: 'High',
      pros: ['Higher profit margins', 'Premium brand image'],
      cons: ['Lower sales volume', 'Limited market reach'],
      recommendation: 'Consider with enhanced features'
    },
    {
      name: 'Penetration Pricing',
      price: 69.99,
      impact: 'High',
      pros: ['Rapid market entry', 'High sales volume'],
      cons: ['Very low margins', 'Brand perception risk'],
      recommendation: 'Short-term strategy only'
    },
    {
      name: 'AI Optimized',
      price: 94.99,
      impact: 'Optimal',
      pros: ['Data-driven pricing', 'Balanced profit/volume'],
      cons: ['Requires market monitoring'],
      recommendation: 'Best overall strategy'
    }
  ];

  const calculateImpact = (newPrice) => {
    const currentSales = 142;
    const priceElasticity = -1.2;
    const priceChange = (newPrice - 89.99) / 89.99;
    const salesChange = priceElasticity * priceChange;
    const newSales = Math.round(currentSales * (1 + salesChange));
    const newRevenue = newPrice * newSales;
    const currentRevenue = 89.99 * currentSales;
    
    return {
      salesChange: newSales - currentSales,
      revenueChange: newRevenue - currentRevenue,
      newSales,
      newRevenue
    };
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Price Strategy</h1>
        <p className="text-gray-600">Optimize your pricing with data-driven insights</p>
      </div>

      {/* Current Pricing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Current Price</p>
                <p className="text-2xl font-bold text-gray-900">${currentPrice}</p>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-2 inline-block">
                  Mid-range
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                💰
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Market Position</p>
                <p className="text-2xl font-bold text-gray-900">3rd</p>
                <p className="text-sm text-gray-500 mt-1">of 6 competitors</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                🎯
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Price Elasticity</p>
                <p className="text-2xl font-bold text-gray-900">-1.2</p>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-2 inline-block">
                  Elastic
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                📈
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Optimization Score</p>
                <p className="text-2xl font-bold text-gray-900">7.8</p>
                <p className="text-sm text-green-600 mt-1">Good</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                🧮
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Price History */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Price Performance History</h2>
          </div>
          <div className="p-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="price" stroke="#3B82F6" strokeWidth={2} name="Price ($)" />
                  <Line yAxisId="right" type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={2} name="Sales" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Competitive Pricing */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Competitive Pricing Landscape</h2>
          </div>
          <div className="p-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={competitorPricing} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="brand" type="category" width={100} />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Bar 
                    dataKey="price" 
                    fill={(entry) => entry.brand === 'Your Product' ? '#3B82F6' : '#94A3B8'} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Price Simulator */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Price Impact Simulator</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label htmlFor="test-price" className="block text-sm font-medium text-gray-700 mb-1">
                Test Price ($)
              </label>
              <input
                id="test-price"
                type="number"
                value={targetPrice}
                onChange={(e) => setTargetPrice(e.target.value)}
                placeholder="Enter test price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {targetPrice && (
              <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900">Projected Impact</h4>
                {(() => {
                  const impact = calculateImpact(parseFloat(targetPrice));
                  return (
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Sales Change:</span>
                        <span className={impact.salesChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                          {impact.salesChange >= 0 ? '+' : ''}{impact.salesChange} units
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Revenue Change:</span>
                        <span className={impact.revenueChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                          ${Math.abs(impact.revenueChange).toFixed(2)} {impact.revenueChange >= 0 ? 'increase' : 'decrease'}
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
            
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Apply New Price
            </button>
          </div>
        </div>

        {/* Recommendations */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Pricing Strategy Recommendations</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pricingStrategies.map((strategy, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">{strategy.name}</h3>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">${strategy.price}</p>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        strategy.impact === 'Optimal' 
                          ? 'bg-green-100 text-green-800' 
                          : strategy.impact === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {strategy.impact}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium text-green-700">Pros:</p>
                      <ul className="list-disc list-inside text-gray-600">
                        {strategy.pros.map((pro, i) => (
                          <li key={i}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium text-red-700">Cons:</p>
                      <ul className="list-disc list-inside text-gray-600">
                        {strategy.cons.map((con, i) => (
                          <li key={i}>{con}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <p className="text-xs text-gray-500">{strategy.recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alert */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg">
        <div className="p-6">
          <div className="flex items-start space-x-3">
            <span className="text-orange-500 mt-0.5">⚠️</span>
            <div>
              <h3 className="font-medium text-orange-900 mb-1">Pricing Alert</h3>
              <p className="text-sm text-orange-700">
                TechSound Pro recently dropped their price to $119.99 (was $129.99). 
                Consider adjusting your strategy to maintain competitive position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceStrategy;