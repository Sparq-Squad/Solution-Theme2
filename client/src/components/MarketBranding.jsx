import React, { useState } from 'react';

const MarketingBranding = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [campaignBudget, setCampaignBudget] = useState('');
  
  const brandMetrics = [
    { metric: 'Brand Awareness', value: 67, target: 75, color: '#3B82F6' },
    { metric: 'Brand Sentiment', value: 4.2, target: 4.5, color: '#10B981' },
    { metric: 'Market Penetration', value: 23, target: 30, color: '#F59E0B' },
    { metric: 'Customer Loyalty', value: 78, target: 80, color: '#8B5CF6' },
  ];

  const campaignPerformance = [
    { platform: 'Google Ads', impressions: 125000, clicks: 3750, ctr: 3.0, cost: 1250, conversions: 187 },
    { platform: 'Facebook', impressions: 89000, clicks: 2670, ctr: 3.0, cost: 890, conversions: 134 },
    { platform: 'Instagram', impressions: 67000, clicks: 2010, ctr: 3.0, cost: 670, conversions: 101 },
    { platform: 'Twitter', impressions: 34000, clicks: 1020, ctr: 3.0, cost: 340, conversions: 51 },
  ];

  const audienceSegments = [
    { name: 'Tech Enthusiasts', size: 35, engagement: 'High', color: '#3B82F6' },
    { name: 'Professionals', size: 28, engagement: 'Medium', color: '#10B981' },
    { name: 'Students', size: 22, engagement: 'High', color: '#F59E0B' },
    { name: 'Gamers', size: 15, engagement: 'Very High', color: '#EF4444' },
  ];

  const contentPerformance = [
    { type: 'Product Demo', views: 12500, engagement: 8.5, shares: 245, likes: 1890 },
    { type: 'User Reviews', views: 8900, engagement: 9.2, shares: 189, likes: 1567 },
    { type: 'Tutorials', views: 6700, engagement: 7.8, shares: 134, likes: 890 },
    { type: 'Behind Scenes', views: 4500, engagement: 6.9, shares: 98, likes: 567 },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'campaigns', label: 'Campaigns' },
    { id: 'audience', label: 'Audience' },
    { id: 'content', label: 'Content' },
    { id: 'brand', label: 'Brand Health' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Marketing & Branding</h1>
        <p className="text-gray-600">Optimize your brand presence and marketing campaigns</p>
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
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Reach</p>
                      <p className="text-2xl font-bold text-gray-900">2.4M</p>
                      <div className="flex items-center mt-1">
                        <span className="mr-1 text-green-500">↑</span>
                        <span className="text-sm text-green-600 font-medium">+12% this month</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                      👁️
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Engagement Rate</p>
                      <p className="text-2xl font-bold text-gray-900">7.3%</p>
                      <div className="flex items-center mt-1">
                        <span className="mr-1 text-green-500">↑</span>
                        <span className="text-sm text-green-600 font-medium">+0.8% this month</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                      ❤️
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Campaign ROI</p>
                      <p className="text-2xl font-bold text-gray-900">3.2x</p>
                      <div className="flex items-center mt-1">
                        <span className="mr-1 text-green-500">↑</span>
                        <span className="text-sm text-green-600 font-medium">Above target</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                      🎯
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Brand Mentions</p>
                      <p className="text-2xl font-bold text-gray-900">1,847</p>
                      <div className="flex items-center mt-1">
                        <span className="mr-1 text-green-500">↑</span>
                        <span className="text-sm text-green-600 font-medium">+18% this week</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                      💬
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trends Chart */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Marketing Performance Trends</h2>
              </div>
              <div className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="mb-4 text-gray-500">Performance Trends Visualization</div>
                    <div className="inline-block bg-gray-200 border-2 border-dashed rounded-xl w-64 h-32" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'campaigns' && (
          <>
            {/* Campaign Creator */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Create New Campaign</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="campaign-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Campaign Name
                    </label>
                    <input
                      id="campaign-name"
                      type="text"
                      placeholder="Summer Headphones Promo"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="campaign-budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Budget ($)
                    </label>
                    <input
                      id="campaign-budget"
                      type="number"
                      value={campaignBudget}
                      onChange={(e) => setCampaignBudget(e.target.value)}
                      placeholder="1000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="campaign-description" className="block text-sm font-medium text-gray-700 mb-1">
                    Campaign Description
                  </label>
                  <textarea
                    id="campaign-description"
                    placeholder="Describe your campaign objectives and target audience..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                  />
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Create Campaign
                </button>
              </div>
            </div>

            {/* Platform Performance */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Campaign Performance by Platform</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {campaignPerformance.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {platform.platform === 'Google Ads' && (
                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">G</div>
                          )}
                          {platform.platform === 'Facebook' && (
                            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">f</div>
                          )}
                          {platform.platform === 'Instagram' && (
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center text-white">IG</div>
                          )}
                          {platform.platform === 'Twitter' && (
                            <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white">𝕏</div>
                          )}
                          <span className="font-medium">{platform.platform}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-8 text-sm">
                        <div>
                          <p className="text-gray-500">Impressions</p>
                          <p className="font-medium">{platform.impressions.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Clicks</p>
                          <p className="font-medium">{platform.clicks.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">CTR</p>
                          <p className="font-medium">{platform.ctr}%</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Cost</p>
                          <p className="font-medium">${platform.cost}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Conversions</p>
                          <p className="font-medium text-green-600">{platform.conversions}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'audience' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Audience Segments */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Audience Segments</h2>
              </div>
              <div className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="mb-4 text-gray-500">Audience Segments Visualization</div>
                    <div className="inline-block bg-gray-200 border-2 border-dashed rounded-xl w-64 h-32" />
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  {audienceSegments.map((segment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: segment.color }}
                        />
                        <span className="text-sm font-medium">{segment.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{segment.size}%</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          segment.engagement === 'Very High' 
                            ? 'bg-green-100 text-green-800' 
                            : segment.engagement === 'High' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-gray-100 text-gray-800'
                        }`}>
                          {segment.engagement}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Demographics */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Audience Demographics</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Age Groups</h4>
                  <div className="space-y-2">
                    {[
                      { range: '18-24', percentage: 22 },
                      { range: '25-34', percentage: 35 },
                      { range: '35-44', percentage: 28 },
                      { range: '45-54', percentage: 12 },
                      { range: '55+', percentage: 3 }
                    ].map((age, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{age.range}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${age.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium w-8">{age.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Top Locations</h4>
                  <div className="space-y-2">
                    {[
                      { city: 'New York', percentage: 18 },
                      { city: 'Los Angeles', percentage: 15 },
                      { city: 'Chicago', percentage: 12 },
                      { city: 'Houston', percentage: 10 },
                      { city: 'Phoenix', percentage: 8 }
                    ].map((location, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{location.city}</span>
                        <span className="text-sm font-medium">{location.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Content Performance</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {contentPerformance.map((content, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{content.type}</h3>
                      <p className="text-sm text-gray-500">{content.views.toLocaleString()} views</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 text-center">
                      <div>
                        <p className="text-sm text-gray-500">Engagement</p>
                        <p className="font-medium">{content.engagement}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Shares</p>
                        <p className="font-medium">{content.shares}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Likes</p>
                        <p className="font-medium">{content.likes}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'brand' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-6">
                    <div className="space-y-3">
                      <h3 className="font-medium text-gray-900">{metric.metric}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold" style={{ color: metric.color }}>
                            {metric.metric === 'Brand Sentiment' ? metric.value : `${metric.value}%`}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            metric.value >= metric.target 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {metric.value >= metric.target ? 'On Track' : 'Below Target'}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full"
                            style={{ 
                              backgroundColor: metric.color,
                              width: `${(metric.value / metric.target) * 100}%`
                            }}
                          />
                        </div>
                        <p className="text-xs text-gray-500">
                          Target: {metric.metric === 'Brand Sentiment' ? metric.target : `${metric.target}%`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Brand Health Score */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Overall Brand Health Score</h2>
              </div>
              <div className="p-6">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-green-100">
                    <span className="text-4xl font-bold text-green-600">8.3</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">Excellent Brand Health</p>
                    <p className="text-gray-600">Your brand is performing well across all key metrics</p>
                  </div>
                  <div className="flex justify-center space-x-8 text-sm">
                    <div className="text-center">
                      <span className="text-yellow-500 text-xl mb-1">★</span>
                      <p className="font-medium">4.2/5</p>
                      <p className="text-gray-500">Customer Rating</p>
                    </div>
                    <div className="text-center">
                      <span className="text-blue-500 text-xl mb-1">↗️</span>
                      <p className="font-medium">67%</p>
                      <p className="text-gray-500">Share of Voice</p>
                    </div>
                    <div className="text-center">
                      <span className="text-purple-500 text-xl mb-1">👥</span>
                      <p className="font-medium">78%</p>
                      <p className="text-gray-500">Loyalty Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MarketingBranding;