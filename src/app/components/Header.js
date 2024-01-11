import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-10 ">
      <div className="flex justify-center items-center py-4">
        <div className="flex items-center space-x-8 bg-gray-600 rounded-lg px-4 py-1.5 transition-transform">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          </div>

          {/* Company Name */}
          <h1 className="text-slate-400 font-lemon-milk animate-colorChange">EVM Warfare</h1>

          {/* Connect Wallet Button */}
          <button className="bg-gray-400 hover:bg-grey text-white px-4 py-2 rounded-lg hover:bubble font-lemon-milk">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
