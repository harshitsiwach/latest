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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharacterIndex((prevIndex) => (prevIndex + 1) % characters.length);
    }, 3000); // Change character every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <home>
      <div> <Spline scene="https://prod.spline.design/PLVh7S-Ybh-5W8J2/scene.splinecode" /> </div>

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

            {/* 3D Character Slider Section */}
        <div className="page-container bg-light-black py-32 px-48">
          <div className="character-slider drop-shadow-[0_35px_35px_rgba(225,225,225,0.5)]">
            <CharacterSlider currentCharacter={characters[currentCharacterIndex]} scale={[2, 2, 2]} />
          </div>
          <div className="character-description flex justify-center py-72 font-lemon-milk font-bold drop-shadow-lg text-white">
            <CharacterDescription currentCharacter={characters[currentCharacterIndex]} />
          </div>
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
