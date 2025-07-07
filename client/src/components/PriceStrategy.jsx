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
  LineChart,
  Line,
  Cell
} from 'recharts';

const PriceStrategy = () => {

  const myProduct = {
    id: 1,
    brand: "Smart TV by Sonu Hansda",
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

  const priceRangeData = tvProductsData.map((item) => ({
    name: item.brand,
    min: item.lowest_price,
    max: item.highest_price,
  }));

  const specComparison = allProducts.map((item) => ({
    brand: item.brand,
    hdmi: item.hdmi_ports,
    usb: item.usb_ports,
    os: item.os,
    price: item.current_price,
  }));

  return (
<div className="p-6 bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] text-white min-h-screen">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="mb-10 text-center">
      <h1 className="text-4xl font-bold text-yellow-400">Pricing Strategy Dashboard</h1>
      <p className="text-gray-400 mt-2 text-lg">Strategic insights and competitive positioning for business growth.</p>
    </div>

    {/* Section Template */}
    <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">

      <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Current Market Prices</h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={allProducts}>
            <CartesianGrid stroke="#2c2f38" strokeDasharray="5 5" />
            <XAxis dataKey="brand" tick={{ fontSize: 12, fill: '#facc15' }} />
            <YAxis tick={{ fill: '#facc15' }} />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#2c2f38' }} formatter={(value) => [`₹${value}`, "Price"]} />
            <Bar dataKey="current_price" name="Current Price (₹)" radius={[4, 4, 0, 0]}>
              {allProducts.map((entry) => (
                <Cell
                  key={`cell-${entry.id}`}
                  fill={entry.id === myProduct.id ? '#facc15' : '#facc1544'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>

    {/* Historical Price Ranges */}
    <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">
      <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Historical Price Ranges</h2>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={priceRangeData}>
            <CartesianGrid stroke="#2c2f38" strokeDasharray="5 5" />
            <XAxis dataKey="name" tick={{ fill: '#facc15' }} />
            <YAxis tick={{ fill: '#facc15' }} />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#2c2f38' }} formatter={(value, name) => [`₹${value}`, name]} />
            <Legend wrapperStyle={{ color: '#facc15' }} />
            <Line type="monotone" dataKey="min" stroke="#10B981" strokeWidth={2} name="Min Price" dot={{ r: 4 }} />
            <Line type="monotone" dataKey="max" stroke="#EF4444" strokeWidth={2} name="Max Price" dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>

    {/* Feature Table */}
    <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">
      <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Feature Comparison</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-[#23272F] text-yellow-200">
            <tr>
              <th className="px-4 py-3 text-left">Brand</th>
              <th className="px-4 py-3 text-left">HDMI</th>
              <th className="px-4 py-3 text-left">USB</th>
              <th className="px-4 py-3 text-left">OS</th>
              <th className="px-4 py-3 text-left">Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {specComparison.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-[#2c2f38] hover:bg-[#1e222d] transition ${item.brand.includes("Sonu") ? 'bg-yellow-900/10 font-medium' : ''}`}
              >
                <td className="px-4 py-3 text-yellow-100">{item.brand}</td>
                <td className="px-4 py-3">{item.hdmi}</td>
                <td className="px-4 py-3">{item.usb}</td>
                <td className="px-4 py-3">{item.os}</td>
                <td className="px-4 py-3 text-yellow-300 font-semibold">₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Strategic Insights */}
    <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">
      <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Strategic Insights</h2>
      <ul className="space-y-3 text-yellow-100 list-disc pl-5 text-sm sm:text-base leading-relaxed">
        <li><strong className="text-yellow-400">Your TV is priced at ₹8499</strong> — competitively in the mid-range segment.</li>
        <li>You offer more USB ports than many but only one HDMI port — consider upgrading for multimedia users.</li>
        <li>Running Linux like Infinix & Thomson, but priced close to Android models — value play.</li>
        <li>Wide price range (₹6999–₹9999) — leverage in festive deals or accessory bundling.</li>
        <li>iFFALCON stays above ₹8999 — signals premium user intent in this segment.</li>
      </ul>
    </section>

    {/* Recommendations */}
    <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">
      <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Recommended Strategy</h2>
      <ul className="space-y-3 text-yellow-100 list-disc pl-5 text-sm sm:text-base leading-relaxed">
        <li><strong className="text-yellow-400">Promo Pricing:</strong> Drop to ₹6999 during festive to boost volume.</li>
        <li><strong className="text-yellow-400">Bundle Smartly:</strong> Pair with accessories at ₹9499 to stay premium.</li>
        <li><strong className="text-yellow-400">Value Focus:</strong> Market Linux as secure + reliable alternative.</li>
        <li><strong className="text-yellow-400">Grab Market:</strong> ₹7999 penetration to beat MarQ/Foxsky.</li>
      </ul>
    </section>

    {/* Summary */}
    <section className="bg-gradient-to-b from-[#0b0c10] via-[#111217] to-[#1a1a1a] p-6 rounded-xl border border-[#2c2f38] shadow-lg mb-8 hover:shadow-yellow-900/30 transition duration-300">
      <h2 className="text-xl font-semibold text-yellow-300 mb-4 border-b border-gray-600 pb-2">Summary</h2>
      <p className="text-yellow-100 mb-3">Your Smart TV sits well in the mid-market with scope to:</p>
      <ul className="space-y-2 text-yellow-100 list-disc pl-5 text-sm sm:text-base">
        <li><strong className="text-yellow-400">Undercut rivals</strong> for market share.</li>
        <li><strong className="text-yellow-400">Go Premium</strong> via feature upgrades.</li>
        <li><strong className="text-yellow-400">Stay Consistent</strong> via loyalty/cross-sales.</li>
      </ul>
    </section>

  </div>
</div>
  );
};

export default PriceStrategy;