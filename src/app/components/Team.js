"use client"
import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import '../Team.css';

function Team() {
 // URLs of the Spline scenes
 const splineScenes = [
  "https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode",
  "https://prod.spline.design/eLo1oNfD8BVhQd-b/scene.splinecode",
  "https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode",
  "https://prod.spline.design/eLo1oNfD8BVhQd-b/scene.splinecode",
  "https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode",
  "https://prod.spline.design/eLo1oNfD8BVhQd-b/scene.splinecode",
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
          prevSlide === splineScenes.length - 1 ? 0 : prevSlide + 1
        );
        setLoading(false); // Fade in the new slide
      }, 1000); // Start loading new slide after 1 second
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className='team-container w-full bg-black'>
      <div className='spline-container'>
        <div className={`spline ${loading ? 'fade-out' : 'fade-in'}`}>
          <Spline scene={splineScenes[currentSlide]} />
        </div>
      </div>
    </main>
  );
}

export default Team;
