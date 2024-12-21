
import { Wallet } from 'lucide-react';
import { UserPlus } from 'lucide-react';
import { Bell } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';

const steps = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Connect Wallet',
    description: 'Link your crypto wallet to start earning rewards'
  },
  {
    icon: <UserPlus className="h-6 w-6" />,
    title: 'Follow Accounts',
    description: 'Choose from available campaigns and follow accounts'
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: 'Verify Follow',
    description: 'We automatically verify your follow action'
  },
  {
    icon: <BadgeDollarSign className="h-6 w-6" />,
    title: 'Get Paid',
    description: 'Receive instant payment in your wallet'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">Start earning in just a few simple steps</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-primary-500 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
