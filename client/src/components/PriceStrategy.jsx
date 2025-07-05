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
    <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gold-400">Pricing Strategy Dashboard</h1>
          <p className="text-gray-300 mt-2 text-lg">
            Strategic insights and competitive positioning for business growth.
          </p>
        </div>

        {/* Current Price vs Competitors */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl mb-8 transform transition duration-300 hover:shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Current Market Prices</h2>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={allProducts}>
                <CartesianGrid stroke="#374151" strokeDasharray="5 5" />
                <XAxis
                  dataKey="brand"
                  interval={0}
                  tick={{ fontSize: 12, fill: '#d1d5db' }}
                />
                <YAxis tick={{ fill: '#d1d5db' }} />
                <Tooltip
                  formatter={(value) => [`₹${value}`, "Price"]}
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    borderColor: '#374151',
                  }}
                />
                <Bar
                  dataKey="current_price"
                  name="Current Price (₹)"
                  radius={[4, 4, 0, 0]}
                >
                  {allProducts.map((entry) => (
                    <Cell
                      key={`cell-${entry.id}`}
                      fill={entry.id === myProduct.id ? '#facc15' : '#ffff002f'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Price Range Comparison */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl mb-8 transform transition duration-300 hover:shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Historical Price Ranges</h2>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceRangeData}>
                <CartesianGrid stroke="#374151" strokeDasharray="5 5" />
                <XAxis dataKey="name" tick={{ fill: '#d1d5db' }} />
                <YAxis tick={{ fill: '#d1d5db' }} />
                <Tooltip formatter={(value, name) => [`₹${value}`, name]} contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151' }} />
                <Legend wrapperStyle={{ color: '#d1d5db' }} />
                <Line type="monotone" dataKey="min" stroke="#10B981" name="Min Price" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="max" stroke="#EF4444" name="Max Price" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl mb-8 transform transition duration-300 hover:shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm uppercase tracking-wide">Brand</th>
                  <th className="px-4 py-3 text-left text-sm uppercase tracking-wide">HDMI</th>
                  <th className="px-4 py-3 text-left text-sm uppercase tracking-wide">USB</th>
                  <th className="px-4 py-3 text-left text-sm uppercase tracking-wide">OS</th>
                  <th className="px-4 py-3 text-left text-sm uppercase tracking-wide">Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                {specComparison.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-700 hover:bg-gray-700/50 ${item.brand.includes("Sonu") ? 'bg-yellow-900/20 font-medium' : ''}`}
                  >
                    <td className="px-4 py-3">{item.brand}</td>
                    <td className="px-4 py-3">{item.hdmi}</td>
                    <td className="px-4 py-3">{item.usb}</td>
                    <td className="px-4 py-3">{item.os}</td>
                    <td className="px-4 py-3">
                      {item.brand.includes("Sonu") ? (
                        <span className="font-semibold text-yellow-400">₹{item.price}</span>
                      ) : (
                        `₹${item.price}`
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Strategic Insights */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl mb-8 transform transition duration-300 hover:shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Strategic Insights</h2>
          <ul className="space-y-3 text-gray-300 list-disc pl-5">
            <li><strong>Your TV is priced at ₹8499</strong> — competitively in the mid-range segment.</li>
            <li>You offer more USB ports than many but only one HDMI port — this may affect multimedia users. Consider upgrading this feature for a premium edge.</li>
            <li>Running on Linux OS like Infinix & Thomson, but priced similarly to Android-based TVs – a strong value play if performance is comparable.</li>
            <li>You have a wide price flexibility (₹6999–₹9999), which opens opportunities for seasonal promotions or bundling accessories.</li>
            <li>Competitors like iFFALCON are holding firm at ₹8999+, indicating that users are willing to pay a premium in this category.</li>
          </ul>
        </section>

        {/* Recommended Strategies */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl mb-8 transform transition duration-300 hover:shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Recommended Pricing Strategy</h2>
          <ul className="space-y-3 text-gray-300 list-disc pl-5">
            <li><strong>Promotional Pricing:</strong> Offer a limited-time discount down to ₹6999 during festive seasons to boost visibility and volume sales.</li>
            <li><strong>Premium Bundling:</strong> Bundle with soundbar or wall mount at ₹9499 to match top-tier competitors without raising base price.</li>
            <li><strong>Value Messaging:</strong> Emphasize Linux stability and security in marketing — differentiate from Android models.</li>
            <li><strong>Penetration Pricing:</strong> Temporarily reduce to ₹7999 to capture market share from Foxsky and MarQ.</li>
          </ul>
        </section>

        {/* Summary Box */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl mb-8 transform transition duration-300 hover:shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Summary</h2>
          <p className="text-gray-300 mb-3">
            Your Smart TV sits well in the mid-market range with decent features. You can either:
          </p>
          <ul className="space-y-2 text-gray-300 list-disc pl-5">
            <li><strong>Go Aggressive</strong> and undercut competitors to gain quick traction.</li>
            <li><strong>Position as Premium</strong> by improving HDMI ports and adding branding around quality/performance.</li>
            <li><strong>Or Maintain Mid-Range</strong> and focus on consistent sales via loyalty programs and cross-selling.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default PriceStrategy;