"use client"
import React from 'react';
import Spline from '@splinetool/react-spline';

function Team() {
  return (
    <main className='w-full bg-black'>
      {/* First row of 3 Splines */}
      <div className='grid grid-cols-3'>
        <div className='w-96 h-96'> {/* Adjust width and height as needed */}
          <Spline scene="https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode" />
        </div>
        <div className='w-96 h-96'>
          <Spline scene="https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode" />
        </div>
        <div className='w-96 h-96'>
          <Spline scene="https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode" />
        </div>
      </div>

      {/* Second row of 3 Splines */}
      <div className='grid grid-cols-3 gap-4'>
        <div className='w-96 h-96'>
          <Spline scene="https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode" />
        </div>
        <div className='w-96 h-96'>
          <Spline scene="https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode" />
        </div>
        <div className='w-96 h-96'>
          <Spline scene="https://prod.spline.design/GISZpptJtmvD75VN/scene.splinecode" />
        </div>
      </div>
    </main>
  );
}

export default Team;
