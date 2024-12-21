
import { Shield, Zap, DollarSign, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure Payments',
    description: 'All transactions are secured through blockchain technology and smart contracts'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Instant Rewards',
    description: 'Get paid immediately after completing the follow action'
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'Competitive Rates',
    description: 'Earn more with our industry-leading reward rates'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Growing Community',
    description: 'Join thousands of users already earning through our platform'
  }
];

export const Features = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose FollowRewards?</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">Experience the future of social media engagement</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-4 sm:p-6 bg-primary-50 rounded-xl">
              <div className="text-primary-500 mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};