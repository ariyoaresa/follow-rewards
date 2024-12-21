
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { HowItWorks } from './components/HowItWorks';
import { CampaignCard } from './components/CampaignCard';
import { Footer } from './components/Footer';
import type { Campaign } from './types';

const SAMPLE_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    platform: 'instagram',
    username: 'traveler.lens',
    rewardAmount: 5,
    followersNeeded: 1000,
    currentFollowers: 750,
    status: 'active',
  },
  {
    id: '2',
    platform: 'tiktok',
    username: 'dancestars',
    rewardAmount: 10,
    followersNeeded: 2000,
    currentFollowers: 1200,
    status: 'active',
  },
  {
    id: '3',
    platform: 'x',
    username: 'cryptoinsights',
    rewardAmount: 8,
    followersNeeded: 1500,
    currentFollowers: 900,
    status: 'active',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Active Campaigns</h2>
          <p className="text-gray-600 mt-2">Follow and earn rewards from these campaigns</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_CAMPAIGNS.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;