import { useState } from 'react';
import { Wallet } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Wallet className="h-8 w-8 text-primary-500" />
            <h1 className="text-2xl font-bold text-gray-900">FollowRewards</h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-primary-500">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-primary-500">Campaigns</a>
            <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition">
              Connect Wallet
            </button>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary-500">Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-primary-500">Campaigns</a>
              <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition">
                Connect Wallet
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};