import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const MarketingBranding = () => {

  const myProduct = {
    id: 1,
    brand: "Nginx TV",
    current_price: 8499,
    lowest_price: 6999,
    highest_price: 9999,
    hdmi_ports: 1,
    usb_ports: 2,
    os: "Linux",
  };

  const tvProductsData = [
    { id: 2, brand: "Foxsky", current_price: 7999, lowest_price: 6999, highest_price: 9000, hdmi_ports: 2, usb_ports: 2, os: "Android" },
    { id: 3, brand: "Infinix", current_price: 8999, lowest_price: 7499, highest_price: 8500, hdmi_ports: 2, usb_ports: 2, os: "Linux" },
    { id: 4, brand: "Thomson", current_price: 8999, lowest_price: 6999, highest_price: 6999, hdmi_ports: 2, usb_ports: 2, os: "Linux" },
    { id: 5, brand: "iFFALCON by TCL", current_price: 8999, lowest_price: 8999, highest_price: 9499, hdmi_ports: 2, usb_ports: 1, os: "Android" },
    { id: 6, brand: "MarQ by Flipkart", current_price: 7799, lowest_price: 6499, highest_price: 7879, hdmi_ports: 2, usb_ports: 1, os: "Coolita" },
  ];

  const allProducts = [myProduct, ...tvProductsData];

  // OS Distribution
  const osCount = allProducts.reduce((acc, item) => {
    acc[item.os] = (acc[item.os] || 0) + 1;
    return acc;
  }, {});

  const osChartData = Object.entries(osCount).map(([os, count]) => ({ name: os, value: count }));

  // HDMI vs USB Ports
  const portComparison = allProducts.map((item) => ({
    brand: item.brand,
    hdmi: item.hdmi_ports,
    usb: item.usb_ports
  }));

  const COLORS = ['#facc15', '#10B981', '#EF4444', '#3B82F6', '#8B5CF6'];

  return (
    <div className="p-6 bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] text-white min-h-screen">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-yellow-400">Marketing & Branding Strategy</h1>
          <p className="text-gray-400 mt-2 text-lg">Position your product in the market with strong branding and unique selling points.</p>
        </div>

        {/* Section: OS Market Share */}
        <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Operating System Adoption</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={osChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {osChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#2c2f38' }} />
                <Legend wrapperStyle={{ color: '#facc15' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-yellow-100">
            Your Linux OS is shared by Infinix and Thomson. This gives you an opportunity to position it as secure, stable, and lightweight compared to Android-based competitors.
          </p>
        </section>

        {/* Section: Port Comparison */}
        <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Port Comparison</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={portComparison}>
                <CartesianGrid stroke="#2c2f38" strokeDasharray="5 5" />
                <XAxis dataKey="brand" tick={{ fontSize: 12, fill: '#facc15' }} />
                <YAxis tick={{ fill: '#facc15' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#2c2f38' }} />
                <Legend wrapperStyle={{ color: '#facc15' }} />
                <Bar dataKey="hdmi" name="HDMI Ports" stackId="a" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="usb" name="USB Ports" stackId="a" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-yellow-100">
            You offer more USB ports than most but fewer HDMI ports. Consider emphasizing versatility in connectivity (e.g., smart home compatibility or media hubs).
          </p>
        </section>

        {/* Section: Brand Differentiation Table */}
        <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Brand Differentiation</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead className="bg-[#23272F] text-yellow-200">
                <tr>
                  <th className="px-4 py-3 text-left">Brand</th>
                  <th className="px-4 py-3 text-left">OS</th>
                  <th className="px-4 py-3 text-left">Unique Value Proposition</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((item, index) => (
                  <tr key={index} className="border-b border-[#2c2f38] hover:bg-[#1e222d] transition">
                    <td className="px-4 py-3 text-yellow-100">{item.brand}</td>
                    <td className="px-4 py-3">{item.os}</td>
                    <td className="px-4 py-3 text-yellow-200">
                      {item.os === "Linux" && "Secure, lightweight, long-term support"}
                      {item.os === "Android" && "Smart features, app ecosystem"}
                      {item.os === "Coolita" && "User-friendly interface"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Branding Strategy Insights */}
        <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Strategic Branding Insights</h2>
          <ul className="space-y-3 text-yellow-100 list-disc pl-5 text-sm sm:text-base leading-relaxed">
            <li><strong className="text-yellow-400">Emphasize Security:</strong> Market Linux as safe and reliable for family use.</li>
            <li><strong className="text-yellow-400">Bundle with Ecosystem:</strong> Offer combo deals with streaming sticks or soundbars.</li>
            <li><strong className="text-yellow-400">Content Partnerships:</strong> Tie up with OTT platforms to highlight pre-installed apps.</li>
            <li><strong className="text-yellow-400">Eco-Friendly Messaging:</strong> Promote energy efficiency and long lifespan.</li>
            <li><strong className="text-yellow-400">Social Proof:</strong> Leverage customer reviews for credibility.</li>
          </ul>
        </section>

        {/* Section: Summary */}
        <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Summary</h2>
          <p className="text-yellow-100 mb-3">Your Smart TV has a strong base to build a compelling brand story around security, performance, and affordability.</p>
          <ul className="space-y-2 text-yellow-100 list-disc pl-5 text-sm sm:text-base">
            <li><strong className="text-yellow-400">Differentiate via OS:</strong> Use Linux as a USP over Android.</li>
            <li><strong className="text-yellow-400">Optimize for tech-savvy users:</strong> Highlight port flexibility and customization.</li>
            <li><strong className="text-yellow-400">Leverage partnerships:</strong> Boost visibility through content integrations.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default MarketingBranding;