"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleConnectWallet = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500); // The popup will disappear after 3 seconds
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" />
      )}

      <header className={`fixed top-0 left-0 w-full z-10 ${showPopup ? 'blur-sm' : ''}`}>
        <div className="flex justify-center items-center py-4">
          <div className="flex items-center space-x-8 bg-gray-600 rounded-lg px-4 py-1.5 transition-transform">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            </div>

            {/* Company Name */}
            <h1 className="text-slate-400 font-lemon-milk animate-colorChange">EVM Warfare</h1>

            {/* Connect Wallet Button */}
            <button 
              className="bg-gray-400 hover:bg-grey text-white px-4 py-2 rounded-lg hover:bubble font-lemon-milk"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </header>
            {/* pop up for connect wallet button */}
      {showPopup && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg z-30 font-lemon-milk">
          Coming Soon
        </div>
      )}
    </>
  );
};

export default Header;
