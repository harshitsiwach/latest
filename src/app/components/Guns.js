"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

// Sample data for guns
const guns = [
  {
    name: "Gun 1",
    description: "Description for Gun 1",
    video: "/videos/smg.mp4",
  },
  // {
  //   name: "Gun 2",
  //   description: "Description for Gun 2",
  //   video: "/videos/ak.mp4",
  // },
  // {
  //   name: "Gun 3",
  //   description: "Description for Gun 3",
  //   video: "/videos/pistol.mp4",
  // },
  // {
  //   name: "Gun 4",
  //   description: "Description for Gun 4",
  //   video: "/videos/m16.mp4",
  // },
  // {
  //   name: "Gun 5",
  //   description: "Description for Gun 5",
  //   video: "/videos/grenade.mp4",
  // },
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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    // ... other settings for Slider
  };

  return (
    <main>
      <div className="guns-page-container bg-light-black py-20">
        <div className="gun-slider">
          <Slider {...settings}>
            {guns.map((gun, index) => (
              <div key={index} className="flex justify-center">
                <video 
                  src={gun.video} 
                  alt={`Gun ${index}`} 
                  className="rounded-3xl" 
                  style={{ maxWidth: 'auto', maxHeight: 'auto' }}
                  loop
                  autoPlay
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
