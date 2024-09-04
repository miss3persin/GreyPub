'use client'

import { useEffect, useRef } from 'react';
import { MainButton } from '../Components/MainButton'
import { HomeScribbles } from '../Components/HomeScribbles'
import Image from 'next/image'
import gradient from '/public/gradient-thingy.png'
// import za_video from '/public/za_video.mp4'

export const HeroSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 1.0;
      }
    }, []);
  return (
    <div className='container flex flex-col items-center justify-center px-20 pt-48 mb-28'>
      <div className='max-w-[40rem] text-center text-white'>
        <p className='mb-5 text-[3.5rem] font-extrabold leading-tight'>
          Your Gateway to Academic Excellence
        </p>
        <p className='mb-9 text-[1.5rem] font-light'>
          Expert assistance for your research projects, from code implementation
          to detailed writeups.
        </p>

        <MainButton text='Start Using GreyPub Today' link='https://greypub.vercel.app/'/>
      </div>

      <div div className='item-center container relative flex w-[1040px] flex-col'>
        <div className='mt-32 h-[35rem] w-[65rem] relative overflow-hidden rounded-2xl bg-slate-800'>
        <Image src={gradient} alt='' className='w-full h-48 absolute bottom-0 z-10' />
          <video
            ref={videoRef}
            className='h-full w-full object-cover'
            src='/za_video.mp4'
            autoPlay
            loop
            muted
          />
        </div>

        <HomeScribbles />
      </div>
    </div>
  )
}
