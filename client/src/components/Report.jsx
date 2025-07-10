import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const Report = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("last-30-days");

  const salesData = [
    { date: "2024-01", sales: 12485, orders: 142, avgOrder: 87.92 },
    { date: "2024-02", sales: 13210, orders: 156, avgOrder: 84.68 },
    { date: "2024-03", sales: 11890, orders: 134, avgOrder: 88.73 },
    { date: "2024-04", sales: 14567, orders: 167, avgOrder: 87.22 },
    { date: "2024-05", sales: 13890, orders: 159, avgOrder: 87.36 },
    { date: "2024-06", sales: 15234, orders: 178, avgOrder: 85.58 },
  ];

  const productPerformance = [
    { name: "Wireless Headphones", sales: 45234, units: 523, margin: 32 },
    { name: "Bluetooth Speakers", sales: 28900, units: 342, margin: 28 },
    { name: "Smart Watches", sales: 34567, units: 198, margin: 42 },
    { name: "Phone Cases", sales: 12340, units: 890, margin: 65 },
    { name: "Chargers", sales: 8900, units: 456, margin: 38 },
  ];

  const marketingROI = [
    { channel: "Google Ads", spend: 2500, revenue: 8750, roi: 3.5 },
    { channel: "Facebook", spend: 1800, revenue: 5400, roi: 3.0 },
    { channel: "Instagram", spend: 1200, revenue: 4200, roi: 3.5 },
    { channel: "Email", spend: 300, revenue: 1800, roi: 6.0 },
    { channel: "SEO", spend: 800, revenue: 3200, roi: 4.0 },
  ];

  const competitorAnalysis = [
    {
      competitor: "TechSound",
      marketShare: 23.4,
      priceIndex: 125,
      brandStrength: 78,
    },
    {
      competitor: "SoundMax",
      marketShare: 18.7,
      priceIndex: 145,
      brandStrength: 72,
    },
    {
      competitor: "AudioPro",
      marketShare: 15.2,
      priceIndex: 89,
      brandStrength: 65,
    },
    {
      competitor: "Your Brand",
      marketShare: 12.8,
      priceIndex: 100,
      brandStrength: 68,
    },
  ];

  const kpiSummary = {
    totalRevenue: 81276,
    totalOrders: 936,
    avgOrderValue: 86.83,
    customerAcquisitionCost: 28.5,
    lifetimeValue: 245.8,
    marketShare: 12.8,
    brandAwareness: 67,
    customerSatisfaction: 4.2,
  };

  const reportSections = [
    { id: "executive", title: "Executive Summary", status: "completed" },
    { id: "sales", title: "Sales Performance", status: "completed" },
    { id: "marketing", title: "Marketing Analysis", status: "completed" },
    {
      id: "competition",
      title: "Competitive Intelligence",
      status: "completed",
    },
    { id: "operations", title: "Operational Metrics", status: "completed" },
    {
      id: "recommendations",
      title: "Strategic Recommendations",
      status: "completed",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "sales", label: "Sales" },
    { id: "marketing", label: "Marketing" },
    { id: "competition", label: "Competition" },
    { id: "operations", label: "Operations" },
    { id: "insights", label: "Insights" },
  ];

  return (
    <div className="p-8 bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a]">
      <div className="flex items-center justify-between mb-8">
        {/* Title & Subtitle */}
        <div>
          <h1 className="text-2xl font-bold text-yellow-300 mb-2">
            Analytics Report
          </h1>
          <p className="text-gray-400">
            Comprehensive business intelligence and insights
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="w-44 px-3 py-2 bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a]
             text-amber-300 border border-gray-700 rounded-md text-sm
             focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
             hover:border-amber-400 hover:ring-1 hover:ring-amber-400
             transition-all duration-200 ease-in-out cursor-pointer"
          >
            <option className="bg-[#1a1a1a] text-amber-300" value="last-7-days">
              Last 7 days
            </option>
            <option
              className="bg-[#1a1a1a] text-amber-300"
              value="last-30-days"
            >
              Last 30 days
            </option>
            <option
              className="bg-[#1a1a1a] text-amber-300"
              value="last-90-days"
            >
              Last 90 days
            </option>
            <option className="bg-[#1a1a1a] text-amber-300" value="last-year">
              Last year
            </option>
            <option className="bg-[#1a1a1a] text-amber-300" value="custom">
              Custom range
            </option>
          </select>

          {/* Share Button */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Page link copied to clipboard!");
            }}
            className="px-4 py-2 border border-gray-700 text-yellow-300 hover:border-amber-500 rounded-md text-sm flex items-center transition-all duration-200 hover:shadow-[0_0_8px_#f59e0b50]"
          >
            <span className="mr-2">🔗</span> Share Page
          </button>

          {/* Print Button */}
          <a href="/Report.docx" download>
            <button className="px-4 py-2 border border-gray-700 text-yellow-300 hover:border-amber-500 rounded-md text-sm flex items-center transition-all duration-200 hover:shadow-[0_0_8px_#f59e0b50]">
              <span className="mr-2">🖨️</span> Print
            </button>
          </a>

          {/* Export PDF Button */}
          <a href="/Report.pdf" download>
            <button className="px-4 py-2 bg-amber-500 text-black font-semibold rounded-md text-sm flex items-center hover:bg-yellow-400 transition-all duration-200 shadow hover:shadow-lg">
              <span className="mr-2">⬇️</span> Export PDF
            </button>
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-yellow-300"
                : "text-gray-400 hover:text-yellow-200"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 rounded"></span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "overview" && (
          <>
            {/* KPI Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "Total Revenue",
                  value: `$${kpiSummary.totalRevenue.toLocaleString()}`,
                  change: "+18% from last period",
                },
                {
                  label: "Total Orders",
                  value: kpiSummary.totalOrders,
                  change: "+12% from last period",
                },
                {
                  label: "Avg Order Value",
                  value: `$${kpiSummary.avgOrderValue}`,
                  change: "+5% from last period",
                },
                {
                  label: "Market Share",
                  value: `${kpiSummary.marketShare}%`,
                  change: "+2.1% from last quarter",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow transition duration-300 hover:border-yellow-500"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">
                          {item.label}
                        </p>
                        <p className="text-2xl font-bold text-yellow-300">
                          {item.value}
                        </p>
                        <div className="flex items-center mt-1">
                          <span className="mr-1 text-green-400">↑</span>
                          <span className="text-sm text-green-400 font-medium">
                            {item.change}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sales Trend */}
            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow transition duration-300 hover:border-yellow-500">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-yellow-300">
                  Revenue & Orders Trend
                </h2>
              </div>
              <div className="p-6">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2f3545" />
                      <XAxis dataKey="date" stroke="#ccc" />
                      <YAxis yAxisId="left" stroke="#ccc" />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#ccc"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1e2433",
                          borderColor: "#3f3f46",
                        }}
                        labelStyle={{ color: "#facc15" }}
                        itemStyle={{ color: "#e5e7eb" }}
                      />
                      <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="sales"
                        stackId="1"
                        stroke="#facc15"
                        fill="#facc15"
                        fillOpacity={0.2}
                        name="Revenue (₹)"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="orders"
                        stroke="#4ade80"
                        strokeWidth={2}
                        name="Orders"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Report Sections Status */}
            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow transition duration-300 hover:border-yellow-500">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-yellow-300">
                  Report Generation Status
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reportSections.map((section) => (
                    <div
                      key={section.id}
                      className="flex items-center justify-between p-3 bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 transition duration-200 hover:border-yellow-500"
                    >
                      <div className="flex items-center space-x-3 text-yellow-200">
                        <span>📄</span>
                        <span className="font-medium">{section.title}</span>
                      </div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          section.status === "completed"
                            ? "bg-green-200 text-green-900"
                            : "bg-yellow-100 text-yellow-900"
                        }`}
                      >
                        {section.status === "completed"
                          ? "Ready"
                          : "Processing"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "sales" && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Performance */}
              <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow hover:border-yellow-500 transition">
                <div className="px-6 py-4 border-b border-gray-700">
                  <h2 className="text-lg font-semibold text-yellow-300">
                    Top Products by Revenue
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {productPerformance.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg hover:border-yellow-400 border border-transparent transition"
                      >
                        <div>
                          <p className="font-medium text-yellow-200">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-400">
                            {product.units} units sold
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-yellow-300">
                            ${product.sales.toLocaleString()}
                          </p>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200">
                            {product.margin}% margin
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sales Metrics Chart */}
              <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow hover:border-yellow-500 transition">
                <div className="px-6 py-4 border-b border-gray-700">
                  <h2 className="text-lg font-semibold text-yellow-300">
                    Monthly Sales Performance
                  </h2>
                </div>
                <div className="p-6">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={salesData}>
                        <CartesianGrid stroke="#444" strokeDasharray="3 3" />
                        <XAxis dataKey="date" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1f1f2b",
                            borderColor: "#666",
                            color: "#fff",
                          }}
                          formatter={(value, name) =>
                            name === "sales"
                              ? [`$${value}`, "Revenue"]
                              : [value, "Orders"]
                          }
                        />
                        <Bar dataKey="sales" fill="#facc15" name="sales" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Summary */}
            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow hover:border-yellow-500 transition mt-8">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-yellow-300">
                  Sales Performance Summary
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg bg-[#22302e]">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">
                      Best Performing Month
                    </h3>
                    <p className="text-2xl font-bold text-green-300">
                      June 2024
                    </p>
                    <p className="text-sm text-green-200">
                      $15,234 revenue | 178 orders
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-[#1e2d3d]">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">
                      Average Growth Rate
                    </h3>
                    <p className="text-2xl font-bold text-blue-300">+12.5%</p>
                    <p className="text-sm text-blue-200">
                      Month-over-month growth
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-[#2b223b]">
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">
                      Top Product Category
                    </h3>
                    <p className="text-2xl font-bold text-purple-300">Audio</p>
                    <p className="text-sm text-purple-200">
                      67% of total revenue
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "marketing" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Marketing ROI */}
            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow hover:border-yellow-500 transition">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-yellow-300">
                  Marketing Channel ROI
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {marketingROI.map((channel, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-gray-600 rounded-lg bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] hover:border-yellow-400 transition"
                    >
                      <div>
                        <p className="font-medium text-yellow-200">
                          {channel.channel}
                        </p>
                        <p className="text-sm text-gray-400">
                          Spend: ${channel.spend}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-yellow-300">
                          {channel.roi}x ROI
                        </p>
                        <p className="text-sm text-green-400">
                          ${channel.revenue} revenue
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROI Chart */}
            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow hover:border-yellow-500 transition">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-yellow-300">
                  Channel Performance Comparison
                </h2>
              </div>
              <div className="p-6">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={marketingROI}>
                      <CartesianGrid stroke="#444" strokeDasharray="3 3" />
                      <XAxis dataKey="channel" stroke="#ccc" />
                      <YAxis stroke="#ccc" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f1f2b",
                          borderColor: "#666",
                          color: "#fff",
                        }}
                      />
                      <Bar dataKey="roi" fill="#34d399" name="ROI (x)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "competition" && (
          <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow hover:border-yellow-500 transition">
            <div className="px-6 py-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-yellow-300">
                Competitive Landscape Analysis
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {competitorAnalysis.map((competitor, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] hover:border-yellow-500 transition"
                  >
                    <div>
                      <h3 className="font-medium text-yellow-200">
                        {competitor.competitor}
                      </h3>
                      <p className="text-sm text-gray-400">
                        Market Position: #{index + 1}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 text-center">
                      <div>
                        <p className="text-sm text-gray-400">Market Share</p>
                        <p className="font-semibold text-yellow-300">
                          {competitor.marketShare}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Price Index</p>
                        <p className="font-semibold text-yellow-300">
                          {competitor.priceIndex}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Brand Strength</p>
                        <p className="font-semibold text-yellow-300">
                          {competitor.brandStrength}/100
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "operations" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Order Fulfillment Rate",
                value: "98.5%",
                subtitle: "Last 30 days",
                color: "text-green-400",
              },
              {
                title: "Avg Delivery Time",
                value: "2.3h",
                subtitle: "15% improvement",
                color: "text-blue-400",
              },
              {
                title: "Return Rate",
                value: "2.1%",
                subtitle: "Industry avg: 3.2%",
                color: "text-orange-400",
              },
              {
                title: "Customer Satisfaction",
                value: "4.2/5",
                subtitle: "Based on 1,247 reviews",
                color: "text-purple-400",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] 
                 rounded-xl border border-gray-700 shadow-md
                 hover:border-yellow-400 hover:shadow-yellow-500/20
                 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="p-6 text-center">
                  <h3 className="font-medium text-yellow-300 text-sm mb-2 tracking-wide uppercase">
                    {card.title}
                  </h3>
                  <p className={`text-3xl font-bold ${card.color}`}>
                    {card.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "insights" && (
          <div className="space-y-6">
            {/* Key Opportunities */}
            <div className="bg-[#172215] border border-green-800 rounded-lg hover:border-yellow-500 transition">
              <div className="p-6">
                <h3 className="font-semibold text-green-400 mb-2">
                  Key Opportunities
                </h3>
                <ul className="space-y-2 text-sm text-green-300">
                  <li>
                    • Increase inventory for wireless headphones - showing 340%
                    demand growth
                  </li>
                  <li>
                    • Expand Instagram marketing - highest ROI at 3.5x with room
                    for budget increase
                  </li>
                  <li>
                    • Target 25-34 age demographic - 67% higher conversion rate
                    than average
                  </li>
                  <li>
                    • Consider premium product line - market gap identified at
                    $150-200 price point
                  </li>
                </ul>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="bg-[#15202b] border border-blue-800 rounded-lg hover:border-yellow-500 transition">
              <div className="p-6">
                <h3 className="font-semibold text-blue-400 mb-2">
                  Strategic Recommendations
                </h3>
                <ul className="space-y-2 text-sm text-blue-300">
                  <li>
                    • Implement dynamic pricing strategy - potential 12% revenue
                    increase
                  </li>
                  <li>
                    • Strengthen delivery partnerships in Manhattan - fastest
                    growing market segment
                  </li>
                  <li>
                    • Launch customer loyalty program - retain high-value
                    customers (LTV: $245.80)
                  </li>
                  <li>
                    • Develop content marketing strategy - current engagement
                    rate 7.3% vs industry 4.2%
                  </li>
                </ul>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="bg-[#261e15] border border-orange-800 rounded-lg hover:border-yellow-500 transition">
              <div className="p-6">
                <h3 className="font-semibold text-orange-400 mb-2">
                  Risk Factors
                </h3>
                <ul className="space-y-2 text-sm text-orange-300">
                  <li>
                    • TechSound Pro price reduction may impact market share
                  </li>
                  <li>• Supply chain dependencies on 3 key suppliers</li>
                  <li>
                    • Customer acquisition cost increasing (+15% this quarter)
                  </li>
                  <li>
                    • Seasonal demand fluctuations not yet fully optimized
                  </li>
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
