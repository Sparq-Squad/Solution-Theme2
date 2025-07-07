const FeatureCard = ({ title, description }) => (
  <div className="p-6 border border-gray-700 rounded-lg bg-[#161a23] text-yellow-200 shadow-sm transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:scale-[1.02]">
    <h3 className="text-lg font-semibold text-yellow-300 mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export default FeatureCard;
