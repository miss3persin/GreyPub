'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '/public/GreyPub-white-clean-2x.png'
import twitter from '/public/twitter_logo.png'
import instagram from '/public/instagram_logo.png'
import linkedin from '/public/linkedIn_logo.png'

export const FooterSection = () => {
  return (
    <footer className='pb-10 pt-24'>
      <div className='container flex items-center px-20'>
        <div>
          <Image src={logo} alt='' width={120} height={100} />
        </div>

        <div className='w-full'>
          <p className='text-center text-sm font-light text-white'>
            © Copyright 2024, All Rights Reserved by GreyPub
          </p>
        </div>

        <div className='flex items-center gap-3'>
          <a
            href='https://twitter.com/miss3persin'
            target='_blank'
            rel='noopener noreferrer'
            className='transform transition duration-200 ease-in-out hover:scale-105'
          >
            <Image src={twitter} alt='Twitter' width={40} height={40} />
          </a>

          <a
            href='https://instagram.com/this_is_segun'
            target='_blank'
            rel='noopener noreferrer'
            className='transform transition duration-200 ease-in-out hover:scale-105'
          >
            <Image src={instagram} alt='Instagram' width={40} height={40} />
          </a>

          <a
            href='https://miss3persin.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='transform transition duration-200 ease-in-out hover:scale-105'
          >
            <Image src={linkedin} alt='LinkedIn' width={40} height={40} />
          </a>
        </div>
      </div>
    </footer>
  )
}
