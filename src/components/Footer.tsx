import React from 'react';
import { Twitter, Instagram, Facebook, Github, Mail } from 'lucide-react';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-600 hover:text-primary-500 transition">
    {children}
  </a>
);

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-600 hover:text-primary-500 transition">
    {children}
  </a>
);

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">FollowRewards</h3>
            <p className="text-gray-600 text-sm">Earn rewards for growing your social media presence.</p>
            <div className="flex space-x-4">
              <SocialIcon href="#"><Twitter className="h-5 w-5" /></SocialIcon>
              <SocialIcon href="#"><Instagram className="h-5 w-5" /></SocialIcon>
              <SocialIcon href="#"><Facebook className="h-5 w-5" /></SocialIcon>
              <SocialIcon href="#"><Github className="h-5 w-5" /></SocialIcon>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><FooterLink href="#">Features</FooterLink></li>
              <li><FooterLink href="#">Campaigns</FooterLink></li>
              <li><FooterLink href="#">Rewards</FooterLink></li>
              <li><FooterLink href="#">Pricing</FooterLink></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><FooterLink href="#">About</FooterLink></li>
              <li><FooterLink href="#">Blog</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
              <li><FooterLink href="#">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><FooterLink href="#">Help Center</FooterLink></li>
              <li><FooterLink href="#">Terms of Service</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
              <li>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-gray-600">support@followrewards.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} FollowRewards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};