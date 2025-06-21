const Step = ({ number, title, description }) => (
  <div>
    <div className="text-5xl font-bold text-indigo-500 mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Step;