import React, { useState } from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "campaigns", label: "Campaigns" },
  { id: "audience", label: "Audience" },
  { id: "content", label: "Content" },
  { id: "brand", label: "Brand Health" },
];

const campaignPerformance = [
  {
    platform: "Google Ads",
    impressions: 840000,
    clicks: 50000,
    ctr: 5.95,
    cost: 1200,
    conversions: 640,
  },
  {
    platform: "Facebook",
    impressions: 620000,
    clicks: 38000,
    ctr: 6.12,
    cost: 950,
    conversions: 510,
  },
  {
    platform: "Instagram",
    impressions: 540000,
    clicks: 32000,
    ctr: 5.92,
    cost: 870,
    conversions: 480,
  },
  {
    platform: "Twitter",
    impressions: 420000,
    clicks: 28000,
    ctr: 6.66,
    cost: 640,
    conversions: 420,
  },
];

const audienceSegments = [
  {
    name: "Tech Enthusiasts",
    size: 30,
    engagement: "Very High",
    color: "#FFD700",
  },
  { name: "College Students", size: 25, engagement: "High", color: "#FACC15" },
  { name: "Parents", size: 20, engagement: "Medium", color: "#A3A3A3" },
  { name: "Professionals", size: 15, engagement: "High", color: "#FBBF24" },
  { name: "Others", size: 10, engagement: "Low", color: "#737373" },
];

const contentPerformance = [
  {
    type: "Video Ad",
    views: 182400,
    engagement: 7.8,
    shares: 350,
    likes: 1450,
  },
  { type: "Blog Post", views: 76300, engagement: 5.2, shares: 170, likes: 610 },
  {
    type: "Product Review",
    views: 53400,
    engagement: 6.1,
    shares: 190,
    likes: 720,
  },
];

const brandMetrics = [
  { metric: "Brand Awareness", value: 72, target: 65, color: "#FFD700" },
  { metric: "Brand Loyalty", value: 78, target: 75, color: "#FACC15" },
  { metric: "Net Promoter Score", value: 60, target: 70, color: "#FBBF24" },
  { metric: "Brand Sentiment", value: 8.1, target: 8.0, color: "#EAB308" },
];

export default function MarketingBranding() {
  const [activeTab, setActiveTab] = useState("overview");
  const [campaignBudget, setCampaignBudget] = useState("");

  return (
    <div className="p-6 sm:p-8  bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] min-h-screen text-yellow-400">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">
          Marketing & Branding
        </h1>
        <p className="text-gray-400">
          Optimize your brand presence and marketing campaigns
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-gray-400 hover:text-yellow-300"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  label: "Total Reach",
                  value: "2.4M",
                  trend: "+12% this month",
                  icon: "👁️",
                },
                {
                  label: "Engagement Rate",
                  value: "7.3%",
                  trend: "+0.8% this month",
                  icon: "❤️",
                },
                {
                  label: "Campaign ROI",
                  value: "3.2x",
                  trend: "Above target",
                  icon: "🎯",
                },
                {
                  label: "Brand Mentions",
                  value: "1,847",
                  trend: "+18% this week",
                  icon: "💬",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#131417] rounded-xl border border-[#2e2e2e] shadow-md p-6 transition-all duration-300 hover:border-amber-500 hover:shadow-[0_0_10px_#f59e0b50]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      <p className="text-2xl font-bold text-amber-400">
                        {item.value}
                      </p>
                      <div className="text-sm text-green-400 mt-1">
                        {item.trend}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shadow-inner">
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-xl border border-[#2c2f36] shadow-lg">
              <div className="px-6 py-4 border-b border-[#2c2f36]">
                <h2 className="text-lg font-semibold text-amber-400 tracking-wide">
                  Marketing Performance Trends
                </h2>
              </div>
              <div className="p-6">
                <div className="h-64 flex items-center justify-center bg-[#1a1c23] rounded-lg border border-[#2f323a]">
                  <div className="text-center text-gray-400">
                    <p className="mb-4">Performance Trends Visualization</p>
                    <div className="inline-block w-64 h-32 border-2 border-dashed border-gray-600 rounded-xl bg-[#131417]" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* CAMPAIGNS TAB */}
        {activeTab === "campaigns" && (
          <>
            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-yellow-400">
                  Create New Campaign
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="campaign-name"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Campaign Name
                    </label>
                    <input
                      id="campaign-name"
                      type="text"
                      placeholder="Summer Headphones Promo"
                      className="w-full px-3 py-2 bg-[#161a23] text-yellow-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="campaign-budget"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Budget ($)
                    </label>
                    <input
                      id="campaign-budget"
                      type="number"
                      value={campaignBudget}
                      onChange={(e) => setCampaignBudget(e.target.value)}
                      placeholder="1000"
                      className="w-full px-3 py-2 bg-[#161a23] text-yellow-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="campaign-description"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Campaign Description
                  </label>
                  <textarea
                    id="campaign-description"
                    placeholder="Describe your campaign objectives..."
                    className="w-full px-3 py-2 bg-[#161a23] text-yellow-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    rows={3}
                  />
                </div>
                <button className="w-full px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition-colors">
                  Create Campaign
                </button>
              </div>
            </div>

            {/* Platform Performance */}
            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-yellow-400">
                  Campaign Performance by Platform
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {campaignPerformance.map((platform, index) => (
<div
  key={index}
  className="flex flex-col sm:flex-row justify-between p-4 bg-[#161a23] rounded-lg text-yellow-300 border border-gray-700 transition-all duration-300 hover:border-amber-500 hover:shadow-[0_0_10px_#f59e0b50]"
>
  <div className="flex items-center space-x-3">
    <div className="w-8 h-8 bg-yellow-400 text-black rounded flex items-center justify-center text-xs font-bold shadow-sm">
      {platform.platform[0]}
    </div>
    <span className="font-semibold text-amber-400">{platform.platform}</span>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-3 sm:mt-0 text-sm text-yellow-100">
    <div>
      <p className="text-gray-400">Impressions</p>
      <p>{platform.impressions.toLocaleString()}</p>
    </div>
    <div>
      <p className="text-gray-400">Clicks</p>
      <p>{platform.clicks.toLocaleString()}</p>
    </div>
    <div>
      <p className="text-gray-400">CTR</p>
      <p>{platform.ctr}%</p>
    </div>
    <div>
      <p className="text-gray-400">Cost</p>
      <p>${platform.cost}</p>
    </div>
    <div>
      <p className="text-gray-400">Conversions</p>
      <p className="text-green-400">{platform.conversions}</p>
    </div>
  </div>
</div>

                ))}
              </div>
            </div>
          </>
        )}
        {/* AUDIENCE TAB */}
        {activeTab === "audience" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Audience Segments */}
            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-yellow-400">
                  Audience Segments
                </h2>
              </div>
              <div className="p-6">
                <div className="h-64 flex items-center justify-center bg-[#161a23] rounded-lg text-gray-400">
                  Audience Segments Visualization
                </div>
                <div className="space-y-3 mt-4">
                  {audienceSegments.map((segment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: segment.color }}
                        />
                        <span className="text-sm font-medium text-yellow-300">
                          {segment.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">
                          {segment.size}%
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            segment.engagement === "Very High"
                              ? "bg-green-200 text-green-900"
                              : segment.engagement === "High"
                              ? "bg-blue-200 text-blue-900"
                              : "bg-gray-300 text-gray-900"
                          }`}
                        >
                          {segment.engagement}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Demographics */}
            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-yellow-400">
                  Audience Demographics
                </h2>
              </div>
              <div className="p-6 space-y-6">
                {/* Age Groups */}
                <div>
                  <h4 className="font-medium text-yellow-300 mb-3">
                    Age Groups
                  </h4>
                  <div className="space-y-2">
                    {[
                      { range: "18-24", percentage: 22 },
                      { range: "25-34", percentage: 35 },
                      { range: "35-44", percentage: 28 },
                      { range: "45-54", percentage: 12 },
                      { range: "55+", percentage: 3 },
                    ].map((age, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-gray-300">
                          {age.range}
                        </span>
                        <div className="flex items-center space-x-2 w-3/4">
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: `${age.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-yellow-300">
                            {age.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Locations */}
                <div>
                  <h4 className="font-medium text-yellow-300 mb-3">
                    Top Locations
                  </h4>
                  <div className="space-y-2">
                    {[
                      { city: "New York", percentage: 18 },
                      { city: "Los Angeles", percentage: 15 },
                      { city: "Chicago", percentage: 12 },
                      { city: "Houston", percentage: 10 },
                      { city: "Phoenix", percentage: 8 },
                    ].map((location, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-gray-300">
                          {location.city}
                        </span>
                        <span className="text-sm font-medium text-yellow-300">
                          {location.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTENT TAB */}
        {activeTab === "content" && (
          <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow">
            <div className="px-6 py-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-yellow-400">
                Content Performance
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {contentPerformance.map((content, index) => (
<div
  key={index}
  className="flex items-center justify-between p-4 rounded-lg  text-yellow-300 border bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] border-gray-700 transition-all duration-300 hover:border-amber-500 hover:shadow-[0_0_10px_#f59e0b50]"
>
  <div>
    <h3 className="font-semibold text-amber-400">{content.type}</h3>
    <p className="text-sm text-gray-400">
      {content.views.toLocaleString()} views
    </p>
  </div>
  
  <div className="grid grid-cols-3 gap-8 text-center">
    <div>
      <p className="text-sm text-gray-400">Engagement</p>
      <p className="font-semibold text-yellow-100">{content.engagement}%</p>
    </div>
    <div>
      <p className="text-sm text-gray-400">Shares</p>
      <p className="font-semibold text-yellow-100">{content.shares}</p>
    </div>
    <div>
      <p className="text-sm text-gray-400">Likes</p>
      <p className="font-semibold text-yellow-100">{content.likes}</p>
    </div>
  </div>
</div>

              ))}
            </div>
          </div>
        )}

        {/* BRAND HEALTH TAB */}
        {activeTab === "brand" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandMetrics.map((metric, index) => (
<div
  key={index}
  className="bg-[#131417] rounded-xl border border-[#2e2e2e] shadow-md transition-all duration-300 hover:border-amber-500 hover:shadow-[0_0_10px_#f59e0b50]"
>
  <div className="p-6 space-y-3">
    <h3 className="font-semibold text-amber-400">{metric.metric}</h3>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span
          className="text-2xl font-bold"
          style={{ color: metric.color }}
        >
          {metric.metric === "Brand Sentiment"
            ? metric.value
            : `${metric.value}%`}
        </span>
        <span
          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors ${
            metric.value >= metric.target
              ? "bg-green-200 text-green-900"
              : "bg-yellow-200 text-yellow-900"
          }`}
        >
          {metric.value >= metric.target ? "On Track" : "Below Target"}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            backgroundColor: metric.color,
            width: `${(metric.value / metric.target) * 100}%`,
          }}
        />
      </div>

      {/* Target Label */}
      <p className="text-xs text-gray-400">
        Target:{" "}
        {metric.metric === "Brand Sentiment"
          ? metric.target
          : `${metric.target}%`}
      </p>
    </div>
  </div>
</div>

              ))}
            </div>

            {/* Brand Health Score */}
            <div className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] rounded-lg border border-gray-700 shadow mt-6">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-yellow-400">
                  Overall Brand Health Score
                </h2>
              </div>
              <div className="p-6 text-center space-y-4 text-yellow-300">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-green-100 mx-auto">
                  <span className="text-4xl font-bold text-green-600">8.3</span>
                </div>
                <div>
                  <p className="text-lg font-medium">Excellent Brand Health</p>
                  <p className="text-gray-400">
                    Your brand is performing well across all key metrics
                  </p>
                </div>
                <div className="flex justify-center space-x-8 text-sm">
                  <div className="text-center">
                    <span className="text-yellow-500 text-xl mb-1">★</span>
                    <p className="font-medium">4.2/5</p>
                    <p className="text-gray-400">Customer Rating</p>
                  </div>
                  <div className="text-center">
                    <span className="text-blue-400 text-xl mb-1">↗️</span>
                    <p className="font-medium">67%</p>
                    <p className="text-gray-400">Share of Voice</p>
                  </div>
                  <div className="text-center">
                    <span className="text-purple-400 text-xl mb-1">👥</span>
                    <p className="font-medium">78%</p>
                    <p className="text-gray-400">Loyalty Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
