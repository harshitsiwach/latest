"use client"
import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

function Team() {
  // URLs of the Spline scenes
  const splineScenes = [
    "https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode",
    "https://prod.spline.design/eLo1oNfD8BVhQd-b/scene.splinecode",
    "https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode",
    "https://prod.spline.design/eLo1oNfD8BVhQd-b/scene.splinecode",
    "https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode",
    "https://prod.spline.design/eLo1oNfD8BVhQd-b/scene.splinecode",
    // Add more URLs as needed
  ];

  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Change slide every 3 seconds (3000 milliseconds)
    const timer = setInterval(() => {
      setCurrentSlide(prevSlide =>
        prevSlide === splineScenes.length - 1 ? 0 : prevSlide + 1
      );
    }, 1500);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <main className='w-full bg-black'>
      <div className='grid grid-cols-1'>
        <div > {/* Adjust width and height as needed */}
          <Spline scene={splineScenes[currentSlide]} />
        </div>
      </div>
    </main>
  );
}

export default Team;
