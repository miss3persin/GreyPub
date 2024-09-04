'use client'

import React from 'react'
import { Accordion } from '../Components/Accordion'
import iconOpen from '/public/better-opened-icon.png'
import iconClosed from '/public/better-closed-icon.png'
import { SectionTitle } from '../Components/SectionTitle'

const accordionItems = [
  {
    title: 'Is there a free trial available?',
    content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  },
  {
    title: 'Section 2',
    content: 'Content for section 2.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  },
  {
    title: 'Section 3',
    content: 'Content for section 3.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  }
]

export const FAQSection = () => {
  return (
    <>
    <SectionTitle text='FAQs'/>
    <div className='container px-60 mb-32'>

      <div className='w-full flex flex-col items-center text-center text-white mb-12'>
        <p className='text-base font-extralight'>Some of the things you may want to know</p>
      </div>

      <div>
        <Accordion items={accordionItems} />
      </div>
    </div>
    </>
  )
}
