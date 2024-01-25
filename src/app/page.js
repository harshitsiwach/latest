"use client"
import Homepage from "./components/Homepage";
import CustomCursor from './components/CustomCursor';
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../app/components/LoadingScreen'; // Import the LoadingScreen component

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to change the loading state after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

 
  return (
    <main>
  <>
      {isLoading && <LoadingScreen />}
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {/* Your main app content */}
      {/* <CustomCursor /> */}
      <Homepage />
      </div>
    </>   
      
    </main>
  );
}