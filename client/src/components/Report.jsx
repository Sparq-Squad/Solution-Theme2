import React from 'react';

const ReportExport = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Report.pdf'; 
    link.download = 'Report.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">Report Export</h1>
      <p className="text-gray-400 mb-6">Generate and download your analytics report</p>
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-black rounded-md text-lg font-medium transition-all"
      >
        <span>⬇️</span> Export PDF Report
      </button>
      <p className="text-gray-500 mt-6 text-sm">
        Your comprehensive business analytics report will be generated and downloaded automatically.
      </p>
    </div>
  );
};

export default ReportExport;
