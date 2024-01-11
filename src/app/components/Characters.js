"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Image from 'next/image';
import {VscArrowCircleLeft , VscArrowCircleRight  } from "react-icons/vsc"
import MobileInfoModal from "./MobileInfoModal";

const characters = [
  {
    path: "/shiba/XX/untitled.gltf",
    info: "Meet 'Azure Racer,' an enigmatic competitor with midnight hair, piercing azure eyes, and an aura of relentless determination. She's the embodiment of speed and style, dominating the arena with captivating finesse.",
    name: "Azure Racer",
  },
  {
    path: "/shiba/New Folder/untitled.gltf",
    info: "Meet 'Neon Echo,' a competitor who radiates an electrifying presence in the gaming world. With a unique style that captures the essence of a futuristic warrior, Neon Echo's vibrant energy and enigmatic demeanor set her apart, promising an unforgettable experience on the battlefield.",
    name: "Neon Echo",
  },
  {
    path: "/shiba/char22.gltf",
    info: "Enter the shadows with 'Shadowstalker,' an elusive and mysterious competitor who thrives in the dark corners of the arena. With a keen eye for concealment and lightning-quick reflexes, Shadowstalker moves silently, striking fear into the hearts of opponents. Beware the unseen presence, for they are a master of surprise and subterfuge.",
    name: "Shadowstalker",
  },
  {
    path: "/shiba/11.gltf",
    info: "Enter the shadows with 'Shadowstalker,' an elusive and mysterious competitor who thrives in the dark corners of the arena. With a keen eye for concealment and lightning-quick reflexes, Shadowstalker moves silently, striking fear into the hearts of opponents. Beware the unseen presence, for they are a master of surprise and subterfuge.",
    name: "Shadowstalker",
  },
  // Add more character paths and info as needed
];

function MeshComponent({ characterIndex }) {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, characters[characterIndex].path);

  useFrame(() => {
    mesh.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={mesh} scale={[2.5, 2.5, 2.5]} position={[0, -2.5, 0]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

/* ... (imports) */

export function Characters() {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#E5E7EB');
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const characterBackgroundColors = {
    0: '#FFC0CB',
    1: '#87CEEB',
    2: '#7E736F',
    3: '#A6C39C',
  };

  const handlePrevCharacter = () => {
    setCurrentCharacter((prev) => (prev - 1 + characters.length) % characters.length);
    updateBackgroundColor();
  };

  const handleNextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length);
    updateBackgroundColor();
  };

  const updateBackgroundColor = () => {
    const newBackgroundColor = characterBackgroundColors[currentCharacter] || '#E5E7EB';
    setBackgroundColor(newBackgroundColor);
  };

  const handleMoreInfoClick = () => {
    setShowMoreInfo(true);
  };

  const handleModalClose = () => {
    setShowMoreInfo(false);
  };

   // Add and remove the 'overflow-hidden' class on the body element based on menuOpen state
   useEffect(() => {
    if (showMoreInfo) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup effect
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showMoreInfo]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-200	 background-change-container">
    {/* Left Section (Column 1) */}
    <div className="hidden md:grid pt-28 font-lemon-milk">
      <div className="text-right">
        <h1 className="text-3xl font-lemon-milk-bold pt-32">
          {characters[currentCharacter].name}
        </h1>
      </div>
      <div className="flex items-center font-lemon-milk justify-between py-1">
        <div className="flex text-right md:mb-36">
          <p className="text-xl md:mt-1 md:ml-20">{characters[currentCharacter].info}</p>
        </div>
      </div>
    </div>

      {/* Center Section (Column 2) */}
      <div className="flex-1 p-4 relative text-center md:text-left border-black">
  <>
    <div className="flex items-center justify-center">
      <div className="md:h-[670px] h-[500px] md:w-[320px] w-[280px] cursor-pointer">
        <Canvas className="h-full w-full" camera={<PerspectiveCamera makeDefault position={[0, 0, 10]} zoom={1} />}>
          <OrbitControls enableZoom={false} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <MeshComponent characterIndex={currentCharacter} />
        </Canvas>
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4">
      <VscArrowCircleLeft
        size={60}
        className="text-lg rounded-full p-2 text-black cursor-pointer"
        onClick={handlePrevCharacter}
      />
      <VscArrowCircleRight
        size={60}
        className="text-lg rounded-full p-2 text-black cursor-pointer"
        onClick={handleNextCharacter}
      />
    </div>
  </>
</div>


       {/* Right Section (Column 3) */}
       <div className="hidden  md:grid md:grid-flow-row p-4 ">
        <div className="font-lemon-milk-bold text-left pt-36 md:text-left">
          <h2 className="text-3xl pt-20">Character Info</h2>
        </div>
        <div className="md:mb-14 md:mr-10">
        <div className="flex items-center font-lemon-milk justify-between border-t border-b-2 border-dashed border-black py-1">
          <div className="flex-1 text-center">
            <h3>Height</h3>
            <h3>6' 2"</h3>
          </div>
          <div className="border-l-2 border-dashed border-green-800 h-10"></div>
          <div className="flex-1 text-center">
            <h3>Weight</h3>
            <h3>185 lbs</h3>
          </div>
        </div>
        <div className="flex items-center font-lemon-milk justify-between border-b border-dotted border-black py-1">
          <div className="flex-1 text-center">
            <h3>Age</h3>
            <h3>24</h3>
          </div>
          <div className="border-l border-dotted border-black h-8"></div>
          <div className="flex-1 text-center">
            <h3>Special Ability</h3>
            <h3>?????</h3>
          </div>
        </div>
        </div>
        <div className="">

        </div>

        {/* Additional information for larger screens */}
      </div>

      {/* More Info Button for Mobile */}
      <div className="block md:hidden">
        <button className="text-xl bg-blue-500 text-white px-4 py-2 rounded" onClick={handleMoreInfoClick}>
          More Info
        </button>
      </div>

      {/* Mobile Info Modal (or Accordion) */}
      {showMoreInfo && (
        <MobileInfoModal character={characters[currentCharacter]} onClose={handleModalClose} />
      )}
    </div>
  );
}
