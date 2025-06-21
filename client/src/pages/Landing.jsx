import Step from '../components/Step';
import FeatureCard from '../components/FeatureCard';

const LandingPage = () => {
    return (
        <div className="font-sans text-gray-900 antialiased">
            <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        Boost Your Sales with AI-Powered Business Analysis
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Upload your product listings from Amazon, Walmart, or Flipkart. Our AI Business Analyst gives you actionable insights on pricing, inventory, demographics, and more.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="/register" className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition">Start Free Trial</a>
                        <a href="#how-it-works" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition">Learn More</a>
                    </div>
                </div>
            </section>

            <section id="features" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
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

            <section id="how-it-works" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <Step number="1" title="Upload Product" description="Import your product listing from Amazon, Walmart, or Flipkart." />
                        <Step number="2" title="AI Analyzes" description="Our fine-tuned LLM analyzes trends, pricing, and audience data." />
                        <Step number="3" title="Get Insights" description="Receive personalized recommendations to boost your sales." />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-indigo-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Take Your Business Further?</h2>
                    <p className="text-lg mb-8">Join thousands of sellers who trust AI Business Analyst to grow their marketplace success.</p>
                    <a href="/register" className="bg-white text-indigo-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition">Get Started Free</a>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;