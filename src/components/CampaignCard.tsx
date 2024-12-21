import React from 'react';
import { Instagram, Twitter, Facebook, Music2 } from 'lucide-react';
import type { Campaign, Platform } from '../types';

const PlatformIcon = ({ platform }: { platform: Platform }) => {
  const iconProps = { className: 'h-6 w-6' };
  switch (platform) {
    case 'instagram':
      return <Instagram {...iconProps} />;
    case 'x':
      return <Twitter {...iconProps} />;
    case 'facebook':
      return <Facebook {...iconProps} />;
    case 'tiktok':
      return <Music2 {...iconProps} />;
  }
};

export const CampaignCard = ({ campaign }: { campaign: Campaign }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-primary-50 rounded-lg">
            <PlatformIcon platform={campaign.platform} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">@{campaign.username}</h3>
            <p className="text-sm text-gray-500 capitalize">{campaign.platform}</p>
          </div>
        </div>
        <span className="text-lg font-bold text-primary-500">${campaign.rewardAmount}</span>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{campaign.currentFollowers}/{campaign.followersNeeded} followers</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div 
            className="bg-primary-500 h-2 rounded-full"
            style={{ width: `${(campaign.currentFollowers / campaign.followersNeeded) * 100}%` }}
          />
        </div>
      </div>

      <button className="w-full mt-4 bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition">
        Follow & Earn
      </button>
    </div>
  );
};