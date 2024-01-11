import React from 'react'
import { Characters } from "./Characters";
import Poweredby from './Poweredby';
import Home from './Home';
import Guns from './Guns';
import Image from 'next/image';
import Header from "./Header";
import SUpportedChains from './SupportedChains';
import PrivacyPolicy from './PrivacyPolicy';
import Link from 'next/link';

function Homepage() {
   
  return (

    
    <main>
      
       <div>
        <Header />
        </div>
        
        <div className='h-auto ' >
            <Home/>
        </div>
        <div>
            <Guns/>
        </div>
      <div className="flex justify-center mt-4">
        <video width="480" height="480" autoPlay loop muted className="rounded-lg video-center">
          <source src="/videos/team.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

        <div>
       
        <Link href="/privacypolicy" legacyBehavior >
          <a target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 hover:border-gray-700 text-gray-400
         hover:text-gray-700 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out bg-transparent font-lemon-milk">Privacy Policy</a>
        </Link>

        </div>
       
    </main>
  )
}

export default Homepage