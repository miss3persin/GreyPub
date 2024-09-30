'use client'

import React from 'react'
import { Accordion } from '../Components/Accordion'
import iconOpen from '/public/better-opened-icon.png'
import iconClosed from '/public/better-closed-icon.png'
import { SectionTitle } from '../Components/SectionTitle'

const accordionItems = [
  {
    title: 'What services does GreyPub offer?',
    content: 'GreyPub is an academia research platform that provides project guidance, code implementation, literature reviews and consultations for final-year computer science and computer engineering students.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  },
  {
    title: 'How can i request assistance?',
    content: 'Simply sign up on our platform, submit your project details and choose a service that fits your needs.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  },
  {
    title: 'What are the payment options?',
    content: 'We accept various payment methods, including credit/debit cards with payments made in dollars, pounds or naira. Also, a full payment or 40/60 before and after payment can be made. Choose the payment method that suits you best during the payment process.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  },
  {
    title: 'Can I use GreyPub if I\'m not studying Computer science related major or courses?',
    content: 'Yes, if your project aligns with any of our topics, you can utilize GreyPub, even if you\'re from a different major. We recognize that many fields may involve machine learning tasks and other technical components that falls under our expertise.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  },
  {
    title: 'What happens if my project is not completed on time?',
    content: 'We strive to meet deadlines; if any issues arises, we will communicate promptly and work to resolve them.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  },
  {
    title: 'How does GreyPub ensure quality?',
    content: 'We have a team of experienced professionals who review all project submissions and provide feedback to maintain high standards.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  },
  {
    title: 'Are the projects original?',
    content: 'All projects from GreyPub are original and tailored to your specifications. We use state-of-the-art plagiarism detection tools to ensure total authenticity.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  },
  {
    title: 'What if I need to make changes to my project?',
    content: 'If the need arises to request changes to your project, sure you can. However, please note that only minor adjustments can be made, as significant changes may affect the project\'s overall scope and timeline. We encourage you to discuss any concerns with your supervisors for best results.',
    iconOpen: iconOpen,
    iconClosed: iconClosed
  }
]

export const FAQSection = () => {
  return (
    <>
    <SectionTitle text='FAQs'/>
    <div className='container px-7 md:px-28 lg:px-60 mb-32'>

      <div className='w-full flex flex-col items-center text-center text-white mb-12'>
        <p className='text-xs md:text-base font-extralight'>Some of the things you may want to know</p>
      </div>

      <div>
        <Accordion items={accordionItems} />
      </div>
    </div>
    </>
  )
}
