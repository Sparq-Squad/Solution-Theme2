const FeatureCard = ({ title, description }) => (
  <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;