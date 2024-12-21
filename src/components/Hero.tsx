import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
            Get Paid to <span className="text-primary-500">Follow</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Earn rewards by following your favorite creators across social media platforms.
            Simple, transparent, and instant payments.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <button className="w-full sm:w-auto bg-primary-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-primary-600 transition flex items-center justify-center gap-2">
              Start Earning <ArrowRight className="h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto bg-white text-primary-500 px-6 sm:px-8 py-3 rounded-lg border border-primary-500 hover:bg-primary-50 transition">
              Create Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;