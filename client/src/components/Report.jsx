import React from 'react';
import report from '../assets/Report.pdf'; 

const Report = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = report; 
    link.download = 'Report.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
          Report Export
        </h1>
        
        <p className="text-slate-300 text-lg mb-12 leading-relaxed">
          Generate and download your analytics report
        </p>
        
        <button
          onClick={handleDownload}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl hover:scale-105"
        >
          {/* Download SVG Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
            />
          </svg>
          Export PDF Report
        </button>
        
        <p className="text-slate-400 text-sm mt-8 leading-relaxed">
          Your comprehensive business analytics report will be generated<br />
          and downloaded automatically.
        </p>
      </div>
    </div>
  );
};

export default Report;
