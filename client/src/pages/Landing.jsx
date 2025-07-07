import Step from '../components/Step';
import FeatureCard from '../components/FeatureCard';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-100 antialiased bg-gradient-to-b from-[#0f1117] to-[#1a1d27]">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 leading-tight mb-6 animate-fade-in">
            Boost Your Sales with AI-Powered Business Analysis
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Upload your product listings from Amazon, Walmart, or Flipkart. Our AI Business Analyst gives you actionable insights on pricing, inventory, demographics, and more.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/register"
              className="bg-yellow-400 text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow-300 transition"
            >
              Start Free Trial
            </a>
            <a
              href="#how-it-works"
              className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 hover:text-black transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#161a23]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-300 text-center mb-12">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Price Optimization"
              description="Let our AI tell you the perfect price point based on demand, competition, and historical data."
            />
            <FeatureCard
              title="Inventory Prediction"
              description="Predict optimal stock levels to avoid overstocking or running out of products."
            />
            <FeatureCard
              title="Target Demographics"
              description="Know which age group and gender are most likely to buy your product."
            />
            <FeatureCard
              title="Regional Insights"
              description="Discover where your product performs best and optimize regional marketing strategies."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#0f1117]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-300 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <Step number="1" title="Upload Product" description="Import your product listing from Amazon, Walmart, or Flipkart." />
            <Step number="2" title="AI Analyzes" description="Our fine-tuned LLM analyzes trends, pricing, and audience data." />
            <Step number="3" title="Get Insights" description="Receive personalized recommendations to boost your sales." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-tr from-yellow-500 via-yellow-400 to-yellow-300 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Your Business Further?</h2>
          <p className="text-lg mb-8">
            Join thousands of sellers who trust <span className="font-semibold">AI Business Analyst</span> to grow their marketplace success.
          </p>
          <a
            href="/register"
            className="bg-black text-yellow-400 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-900 transition"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
