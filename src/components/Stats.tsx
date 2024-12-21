import React from 'react';

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '$2M+', label: 'Rewards Paid' },
  { value: '100K+', label: 'Completed Tasks' },
  { value: '4.9/5', label: 'User Rating' }
];

export const Stats = () => {
  return (
    <section className="bg-primary-500 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};