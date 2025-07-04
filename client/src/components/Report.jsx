import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const Report = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('last-30-days');
  
  const salesData = [
    { date: '2024-01', sales: 12485, orders: 142, avgOrder: 87.92 },
    { date: '2024-02', sales: 13210, orders: 156, avgOrder: 84.68 },
    { date: '2024-03', sales: 11890, orders: 134, avgOrder: 88.73 },
    { date: '2024-04', sales: 14567, orders: 167, avgOrder: 87.22 },
    { date: '2024-05', sales: 13890, orders: 159, avgOrder: 87.36 },
    { date: '2024-06', sales: 15234, orders: 178, avgOrder: 85.58 },
  ];

  const productPerformance = [
    { name: 'Wireless Headphones', sales: 45234, units: 523, margin: 32 },
    { name: 'Bluetooth Speakers', sales: 28900, units: 342, margin: 28 },
    { name: 'Smart Watches', sales: 34567, units: 198, margin: 42 },
    { name: 'Phone Cases', sales: 12340, units: 890, margin: 65 },
    { name: 'Chargers', sales: 8900, units: 456, margin: 38 },
  ];

  const marketingROI = [
    { channel: 'Google Ads', spend: 2500, revenue: 8750, roi: 3.5 },
    { channel: 'Facebook', spend: 1800, revenue: 5400, roi: 3.0 },
    { channel: 'Instagram', spend: 1200, revenue: 4200, roi: 3.5 },
    { channel: 'Email', spend: 300, revenue: 1800, roi: 6.0 },
    { channel: 'SEO', spend: 800, revenue: 3200, roi: 4.0 },
  ];

  const competitorAnalysis = [
    { competitor: 'TechSound', marketShare: 23.4, priceIndex: 125, brandStrength: 78 },
    { competitor: 'SoundMax', marketShare: 18.7, priceIndex: 145, brandStrength: 72 },
    { competitor: 'AudioPro', marketShare: 15.2, priceIndex: 89, brandStrength: 65 },
    { competitor: 'Your Brand', marketShare: 12.8, priceIndex: 100, brandStrength: 68 },
  ];

  const kpiSummary = {
    totalRevenue: 81276,
    totalOrders: 936,
    avgOrderValue: 86.83,
    customerAcquisitionCost: 28.50,
    lifetimeValue: 245.80,
    marketShare: 12.8,
    brandAwareness: 67,
    customerSatisfaction: 4.2
  };

  const reportSections = [
    { id: 'executive', title: 'Executive Summary', status: 'completed' },
    { id: 'sales', title: 'Sales Performance', status: 'completed' },
    { id: 'marketing', title: 'Marketing Analysis', status: 'completed' },
    { id: 'competition', title: 'Competitive Intelligence', status: 'completed' },
    { id: 'operations', title: 'Operational Metrics', status: 'completed' },
    { id: 'recommendations', title: 'Strategic Recommendations', status: 'completed' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'sales', label: 'Sales' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'competition', label: 'Competition' },
    { id: 'operations', label: 'Operations' },
    { id: 'insights', label: 'Insights' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics Report</h1>
          <p className="text-gray-600">Comprehensive business intelligence and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="w-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="last-7-days">Last 7 days</option>
            <option value="last-30-days">Last 30 days</option>
            <option value="last-90-days">Last 90 days</option>
            <option value="last-year">Last year</option>
            <option value="custom">Custom range</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center">
            <span className="mr-2">↗️</span> Share
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center">
            <span className="mr-2">🖨️</span> Print
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm flex items-center">
            <span className="mr-2">⬇️</span> Export PDF
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <>
            {/* KPI Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">${kpiSummary.totalRevenue.toLocaleString()}</p>
                      <div className="flex items-center mt-1">
                        <span className="mr-1 text-green-500">↑</span>
                        <span className="text-sm text-green-600 font-medium">+18% from last period</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Orders</p>
                      <p className="text-2xl font-bold text-gray-900">{kpiSummary.totalOrders}</p>
                      <div className="flex items-center mt-1">
                        <span className="mr-1 text-green-500">↑</span>
                        <span className="text-sm text-green-600 font-medium">+12% from last period</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Avg Order Value</p>
                      <p className="text-2xl font-bold text-gray-900">${kpiSummary.avgOrderValue}</p>
                      <div className="flex items-center mt-1">
                        <span className="mr-1 text-green-500">↑</span>
                        <span className="text-sm text-green-600 font-medium">+5% from last period</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Market Share</p>
                      <p className="text-2xl font-bold text-gray-900">{kpiSummary.marketShare}%</p>
                      <div className="flex items-center mt-1">
                        <span className="mr-1 text-green-500">↑</span>
                        <span className="text-sm text-green-600 font-medium">+2.1% from last quarter</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Trend */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Revenue & Orders Trend</h2>
              </div>
              <div className="p-6">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Area yAxisId="left" type="monotone" dataKey="sales" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="Revenue ($)" />
                      <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#10B981" strokeWidth={2} name="Orders" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Report Sections Status */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Report Generation Status</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reportSections.map((section) => (
                    <div key={section.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span>📄</span>
                        <span className="font-medium">{section.title}</span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        section.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {section.status === 'completed' ? 'Ready' : 'Processing'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'sales' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Performance */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Top Products by Revenue</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {productPerformance.map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.units} units sold</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">${product.sales.toLocaleString()}</p>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {product.margin}% margin
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sales Metrics Chart */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Monthly Sales Performance</h2>
                </div>
                <div className="p-6">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip formatter={(value, name) => name === 'sales' ? [`$${value}`, 'Revenue'] : [value, 'Orders']} />
                        <Bar dataKey="sales" fill="#3B82F6" name="sales" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Summary */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Sales Performance Summary</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Best Performing Month</h3>
                    <p className="text-2xl font-bold text-green-600">June 2024</p>
                    <p className="text-sm text-green-700">$15,234 revenue | 178 orders</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Average Growth Rate</h3>
                    <p className="text-2xl font-bold text-blue-600">+12.5%</p>
                    <p className="text-sm text-blue-700">Month-over-month growth</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Top Product Category</h3>
                    <p className="text-2xl font-bold text-purple-600">Audio</p>
                    <p className="text-sm text-purple-700">67% of total revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'marketing' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Marketing ROI */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Marketing Channel ROI</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {marketingROI.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{channel.channel}</p>
                        <p className="text-sm text-gray-500">Spend: ${channel.spend}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{channel.roi}x ROI</p>
                        <p className="text-sm text-green-600">${channel.revenue} revenue</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROI Chart */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Channel Performance Comparison</h2>
              </div>
              <div className="p-6">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={marketingROI}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="channel" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="roi" fill="#10B981" name="ROI (x)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'competition' && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Competitive Landscape Analysis</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {competitorAnalysis.map((competitor, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{competitor.competitor}</h3>
                      <p className="text-sm text-gray-500">Market Position: #{index + 1}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 text-center">
                      <div>
                        <p className="text-sm text-gray-500">Market Share</p>
                        <p className="font-semibold">{competitor.marketShare}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Price Index</p>
                        <p className="font-semibold">{competitor.priceIndex}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Brand Strength</p>
                        <p className="font-semibold">{competitor.brandStrength}/100</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'operations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6 text-center">
                <h3 className="font-medium text-gray-900 mb-2">Order Fulfillment Rate</h3>
                <p className="text-3xl font-bold text-green-600">98.5%</p>
                <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6 text-center">
                <h3 className="font-medium text-gray-900 mb-2">Avg Delivery Time</h3>
                <p className="text-3xl font-bold text-blue-600">2.3h</p>
                <p className="text-sm text-gray-500 mt-1">15% improvement</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6 text-center">
                <h3 className="font-medium text-gray-900 mb-2">Return Rate</h3>
                <p className="text-3xl font-bold text-orange-600">2.1%</p>
                <p className="text-sm text-gray-500 mt-1">Industry avg: 3.2%</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6 text-center">
                <h3 className="font-medium text-gray-900 mb-2">Customer Satisfaction</h3>
                <p className="text-3xl font-bold text-purple-600">4.2/5</p>
                <p className="text-sm text-gray-500 mt-1">Based on 1,247 reviews</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg">
              <div className="p-6">
                <h3 className="font-semibold text-green-800 mb-2">Key Opportunities</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Increase inventory for wireless headphones - showing 340% demand growth</li>
                  <li>• Expand Instagram marketing - highest ROI at 3.5x with room for budget increase</li>
                  <li>• Target 25-34 age demographic - 67% higher conversion rate than average</li>
                  <li>• Consider premium product line - market gap identified at $150-200 price point</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg">
              <div className="p-6">
                <h3 className="font-semibold text-blue-800 mb-2">Strategic Recommendations</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Implement dynamic pricing strategy - potential 12% revenue increase</li>
                  <li>• Strengthen delivery partnerships in Manhattan - fastest growing market segment</li>
                  <li>• Launch customer loyalty program - retain high-value customers (LTV: $245.80)</li>
                  <li>• Develop content marketing strategy - current engagement rate 7.3% vs industry 4.2%</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg">
              <div className="p-6">
                <h3 className="font-semibold text-orange-800 mb-2">Risk Factors</h3>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• TechSound Pro price reduction may impact market share</li>
                  <li>• Supply chain dependencies on 3 key suppliers</li>
                  <li>• Customer acquisition cost increasing (+15% this quarter)</li>
                  <li>• Seasonal demand fluctuations not yet fully optimized</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;