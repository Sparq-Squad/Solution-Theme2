import React from 'react';
import { Link } from 'react-router-dom';

const OverviewCard = ({ 
  number, 
  title, 
  description, 
  icon, 
  path, 
  showArrow = true 
}) => {
  return (
    <div className="relative">
      <Link to={path} className="block group">
        <div className="bg-black rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 animate-fade-in">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-yellow-500 text-slate-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              {number}
            </div>
            <div className="bg-slate-700 rounded-lg p-2 group-hover:bg-yellow-500 transition-colors duration-300">
              {icon}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
          
          <div className="mt-4 flex items-center text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </Link>
      
      {showArrow && (
        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
          <div className="bg-yellow-500 rounded-full p-2 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-900" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

const Overview = () => {
 const cards = [
  {
    number: 1,
    title: 'Add Product',
    description: 'Define your product details and specifications',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-500 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    path: '/dashboard/add-product'
  },
  {
    number: 2,
    title: 'Market Insight',
    description: 'Analyze market trends and competitive landscape',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4 0V5a2 2 0 00-2-2H7a2 2 0 00-2 2v12m4 0h8" />
      </svg>
    ),
    path: '/dashboard/market-insight'
  },
  {
    number: 3,
    title: 'Price Strategy',
    description: 'Develop optimal pricing strategies',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.5 0-3 .9-3 2s1.5 2 3 2 3 .9 3 2-1.5 2-3 2m0-6V4m0 12v4" />
      </svg>
    ),
    path: '/dashboard/price-strategy'
  },
  {
    number: 4,
    title: 'Marketing & Branding',
    description: 'Create effective marketing campaigns',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-pink-500 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 12h9m0 0l-3-3m3 3l-3 3M4 6h4m-4 6h4m-4 6h4" />
      </svg>
    ),
    path: '/dashboard/market-branding'
  },
  {
    number: 5,
    title: 'Logistic Planning',
    description: 'Optimize your supply chain and delivery',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M3 3h13v13H3V3zm13 0h4l3 5v8h-2a3 3 0 00-6 0H9a3 3 0 00-6 0H1v-1h15V3z" />
        <circle cx="5.5" cy="18.5" r="1.5" />
        <circle cx="18.5" cy="18.5" r="1.5" />
      </svg>
    ),
    path: '/dashboard/logistic-planning'
  },
  {
    number: 6,
    title: 'Generate Report',
    description: 'Compile comprehensive business analysis',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500 group-hover:text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m2-6V5a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2h5" />
      </svg>
    ),
    path: '/dashboard/report'
  }
];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          {/* Grid icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-yellow-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          
          <div>
            <h1 className="text-3xl font-bold">Overview</h1>
            <p className="text-slate-400 mt-1">
              AI-powered business analysis and strategy recommendations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <OverviewCard
              key={card.path}
              number={card.number}
              title={card.title}
              description={card.description}
              icon={card.icon}
              path={card.path}
              showArrow={index < cards.length - 1}
            />
          ))}
        </div>

        <div className="mt-12 bg-black rounded-xl p-8 border border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                AI Business Analyst
              </h2>
              <p className="text-slate-300 max-w-2xl">
                Our AI-powered platform analyzes your product, market conditions, and competition
                to provide actionable insights and strategic recommendations for business growth.
              </p>
            </div>
            <Link 
              to="/dashboard/add-product" 
              className="mt-4 md:mt-0 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-3 px-6 rounded-lg flex items-center transition-colors"
            >
              {/* Plus icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Start Analysis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;