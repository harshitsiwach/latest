"use client"
import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spline from '@splinetool/react-spline';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Html } from '@react-three/drei';
import { Suspense } from 'react';
import { useThree } from '@react-three/fiber';

// Character Data
const characters = [
  {
    name: "Character 1",
    description: "Description for Character 1",
    modelPath: "/shiba/1/1.gltf",
    scale: [2, 2, 2]
  },
  {
    name: "Character 2",
    description: "Description for Character 1",
    modelPath: "/shiba/2/2.gltf",
    scale: [2, 2, 2]
  },
  {
    name: "Character 3",
    description: "Description for Character 1",
    modelPath: "/shiba/3/3.gltf",
    scale: [2, 2, 2]
  },
  {
    name: "Character 4",
    description: "Description for Character 1",
    modelPath: "/shiba/4/4.gltf",
    scale: [2, 2, 2]
  },
  {
    name: "Character 5",
    description: "Description for Character 1",
    modelPath: "/shiba/5/8r.gltf",
    scale: [2, 2, 2]
  },
  // ... more characters
];

// Character Model Component
const CharacterModel = ({ modelPath, scale }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  useFrame(() => {
    gltf.scene.rotation.y += 0.005;
  });

  return <primitive object={gltf.scene} scale={scale} />;
};

// Character Slider Component
const CharacterSlider = ({ currentCharacter }) => {
  return (
    <Canvas style={{ width: '800px', height: '800px' }}>
      <UpdateCamera />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} />
      <CharacterModel modelPath={currentCharacter.modelPath} scale={currentCharacter.scale} />
    </Canvas>
  );
};

// Character Description Component
const CharacterDescription = ({ currentCharacter }) => {
  return (
    <div className="fade-in-out">
      <h2>{currentCharacter.name}</h2>
      <p>{currentCharacter.description}</p>
    </div>
  );
};

// Character Camera Component
const UpdateCamera = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Change camera properties
    camera.position.set(0, 1.7, 5);
    camera.fov = 50;
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
};

function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharacterIndex((prevIndex) => (prevIndex + 1) % characters.length);
    }, 3000); // Change character every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <home>
     <div>
      {/* Spline component for non-mobile (larger screens) */}
      <div className="hidden sm:block">
        <Spline scene="https://prod.spline.design/PLVh7S-Ybh-5W8J2/scene.splinecode" />
      </div>

      {/* Text message for mobile version */}
      <div className="block sm:hidden text-center px-4 bg-light-black font-lemon-milk text-white py-36 ">
        <p className="text-5xl py-8 font-bold">EVM WARFARE</p>
        <p className="text-lg">Revolutionizing gaming</p>
        <p className="text-lg">with</p>
        <p className="text-lg">web3 and Unreal Engine</p>
      </div>
    </div>


            {/* Image Slider Section */}
          <div className="flex justify-center items-center bg-light-black">
            <Slider {...settings} className="w-full max-w-screen-lg">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="flex justify-center">
                  <img 
                    src={`/images/homepage/${num}.png`} 
                    alt={`Slide ${num}`} 
                    className="shadow-cyan-500/50 rounded-3xl" 
                    style={{ maxWidth: 'auto', maxHeight: 'auto' }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="page-container bg-light-black py-8 px-4 sm:py-32 sm:px-48 w-full">
  {/* Mobile Version: Center the character slider */}
  <div className="flex sm:hidden flex-col items-center justify-center w-full">
    <div className="character-slider w-full flex justify-center items-center">
      <CharacterSlider currentCharacter={characters[currentCharacterIndex]} scale={[2, 2, 2]} />
    </div>
    <div className="mt-4 w-full flex justify-center">
      <button onClick={togglePopup} className="more-info-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        More Info
      </button>
    </div>
  </div>

  {/* Larger Screen Version: Character slider on the left and description on the right */}
  <div className="hidden sm:flex flex-row items-center justify-start w-full">
    <div className="character-slider flex-1 flex justify-center items-center">
      <CharacterSlider currentCharacter={characters[currentCharacterIndex]} scale={[2, 2, 2]} />
    </div>
    <div className="character-description flex-1 text-white font-bold">
      <CharacterDescription currentCharacter={characters[currentCharacterIndex]} />
    </div>
  </div>

  {/* Popup for character description */}
  {showPopup && (
    <div className="popup-container fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <CharacterDescription currentCharacter={characters[currentCharacterIndex]} />
        <button onClick={togglePopup} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  )}
</div>





          {/* Marquee LOGOS Slider Section */}

          <div className='bg-white' style={{paddingTop:"0.5px", paddingBottom:"0.5px", }}></div>

<div className="marquee-container bg-light-black py-6" >
  <div className="marquee left-to-right">
    {/* Add your logos here */}
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/EpicGames.png" alt="Logo 1" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Polygon.png" alt="Logo 2" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/RPMe.png" alt="Logo 3" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Shm.png" alt="Logo 4" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/UnrealEngine.png" alt="Logo 5" />
    {/* ... more logos */}
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/EpicGames.png" alt="Logo 1" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Polygon.png" alt="Logo 2" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/RPMe.png" alt="Logo 3" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Shm.png" alt="Logo 4" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/UnrealEngine.png" alt="Logo 5" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/EpicGames.png" alt="Logo 1" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Polygon.png" alt="Logo 2" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/RPMe.png" alt="Logo 3" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Shm.png" alt="Logo 4" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/UnrealEngine.png" alt="Logo 5" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/EpicGames.png" alt="Logo 1" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Polygon.png" alt="Logo 2" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/RPMe.png" alt="Logo 3" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Shm.png" alt="Logo 4" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/UnrealEngine.png" alt="Logo 5" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/EpicGames.png" alt="Logo 1" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Polygon.png" alt="Logo 2" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/RPMe.png" alt="Logo 3" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Shm.png" alt="Logo 4" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/UnrealEngine.png" alt="Logo 5" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/EpicGames.png" alt="Logo 1" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Polygon.png" alt="Logo 2" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/RPMe.png" alt="Logo 3" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/Shm.png" alt="Logo 4" />
    <img className="drop-shadow-[0_10px_5px_rgba(18,18,18,0.5)]" style={{  height:"100px", width:"auto", paddingLeft:"10px", paddingRight:"10px"}} src="/images/Logos/UnrealEngine.png" alt="Logo 5" />
  </div>

</div>

<div className='bg-white' style={{paddingTop:"0.5px", paddingBottom:"0.5px", }}></div>

    </home>
  );
}

export default Home;
