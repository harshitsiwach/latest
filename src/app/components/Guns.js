"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

// Sample data for guns
const guns = [
  {
    name: "Gun 1",
    description: "Description for Gun 1",
    image: "/images/guns/1.png",
  },
  {
    name: "Gun 2",
    description: "Description for Gun 1",
    image: "/images/guns/2.png",
  },
  {
    name: "Gun 3",
    description: "Description for Gun 1",
    image: "/images/guns/3.png",
  },
  {
    name: "Gun 4",
    description: "Description for Gun 1",
    image: "/images/guns/4.png",
  },
  {
    name: "Gun 5",
    description: "Description for Gun 1",
    image: "/images/guns/5.png",
  },
  // ... more guns
];

function Guns() {

  const [currentGunIndex, setCurrentGunIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGunIndex((prevIndex) => (prevIndex + 1) % guns.length);
    }, 3000); // Change gun every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    // ... other settings for Slider
  };

  return (
    <main>
      
            {/* Image Slider Section */}
    <div className="guns-page-container bg-light-black py-20">
      <div className="gun-slider">
        <Slider {...settings}>
          {guns.map((gun, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={gun.image} 
                alt={`Gun ${index}`} 
                className="shadow-cyan rounded-3xl" 
                style={{ maxWidth: 'auto', maxHeight: 'auto' }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="gun-description fade-in-out text-gray-100 font-lemon-milk flex justify-center py-44">
        <h2>{guns[currentGunIndex].name}</h2>
        <p>{guns[currentGunIndex].description}</p>
      </div>
    </div>

    </main>
  );
}

export default Guns;
