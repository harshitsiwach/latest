"use client"
import React, { useState, useEffect } from 'react';
import '../Team.css';

function Team() {
  // URLs of the PNG images
  const imageUrls = [
    "/images/team/0xMilitant.png",
    "/images/team/0xMilitant.png",
    "/images/team/0xMilitant.png",
    "/images/team/0xMilitant.png",
    "/images/team/0xMilitant.png",
    "/images/team/0xMilitant.png",
  ];

  // State to track loading of a new slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Change slide every 12 seconds
    const timer = setInterval(() => {
      setLoading(true); // Start fading out
      setTimeout(() => {
        setCurrentSlide(prevSlide =>
          prevSlide === imageUrls.length - 1 ? 0 : prevSlide + 1
        );
        setLoading(false); // Fade in the new slide
      }, 1000); // Start loading new slide after 1 second
    }, 6000); // Change to the desired interval

    return () => clearInterval(timer);
  }, [imageUrls.length]);

  return (
    <main className='team-container w-full bg-black'>
      <div className='spline-container h-full'>
        <div className={`slide ${loading ? 'fade-out' : 'fade-in'}`}>
          <img src={imageUrls[currentSlide]} alt="Team member" className='w-[480px] h-[520px]'/>
        </div>
      </div>
    </main>
  );
}

export default Team;
