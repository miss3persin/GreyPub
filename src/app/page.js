import React from 'react';
import { NavSection } from './Sections/NavSection';
import { HeroSection } from './Sections/HeroSection';
import { FooterSection } from './Sections/FooterSection';
import { FAQSection } from './Sections/FAQSection';
import { FeaturesSection } from './Sections/FeaturesSection';
import { BlogSection } from './Sections/BlogSection';
import { TestimonialSection } from './Sections/TestimonialSection';
import { WorkflowSection } from './Sections/WorkflowSection';
import { FocusSection } from './Sections/FocusSection';
import { PriceSection } from './Sections/PriceSection';


const page = () => {

  return (
    <section className='bg-[#0F172A]'>
      <NavSection/>
      <HeroSection/>
      <FeaturesSection/>
      <BlogSection/>
      <WorkflowSection/>
      <PriceSection/>
      <TestimonialSection/>
      <FocusSection/>
      <FAQSection/>
      <FooterSection/>
  </section>
  )
}

export default page