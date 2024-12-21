export type Platform = 'instagram' | 'tiktok' | 'x' | 'facebook';

export interface Campaign {
  id: string;
  platform: Platform;
  username: string;
  rewardAmount: number;
  followersNeeded: number;
  currentFollowers: number;
  status: 'active' | 'completed' | 'pending';
}