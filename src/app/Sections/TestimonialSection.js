'use client'

import React from 'react'
import Marquee from 'react-fast-marquee';
import { SectionTitle } from '../Components/SectionTitle'
import { Testimonial } from '../Components/Testimonial'

export const TestimonialSection = () => {
  const testimonials = [
    {
      imageSrc: '/hypothetical-person.jpg',
      starRating: 4,
      testimonialText: '"Lorem ipsum dolor sit amet consectetur. Enim ut pharetra eget nibh aenean risus enim. Ipsum iaculis rhoncus natoque lobortis rhoncus."',
      authorName: "Oluwasegunfunmi Ige-bello",
      authorTitle: "Student"
    },
    {
      imageSrc: '/hypothetical-person.jpg',
      starRating: 5,
      testimonialText: '"Lorem ipsum dolor sit amet consectetur. Enim ut pharetra eget nibh aenean risus enim. Ipsum iaculis rhoncus natoque lobortis rhoncus."',
      authorName: "Oluwasegunfunmi Ige-bello",
      authorTitle: "Student"
    },
    {
      imageSrc: '/hypothetical-person.jpg',
      starRating: 5,
      testimonialText: '"Lorem ipsum dolor sit amet consectetur. Enim ut pharetra eget nibh aenean risus enim. Ipsum iaculis rhoncus natoque lobortis rhoncus."',
      authorName: "Oluwasegunfunmi Ige-bello",
      authorTitle: "Student"
    }
  ];

  return (
    <>
      <SectionTitle text='TESTIMONIALS' />
      <Marquee gradient={false} speed={30}>
        <div className="flex mb-32">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              imageSrc={testimonial.imageSrc}
              starRating={testimonial.starRating}
              testimonialText={testimonial.testimonialText}
              authorName={testimonial.authorName}
              authorTitle={testimonial.authorTitle}
            />
          ))}
        </div>
      </Marquee>
    </>
  )
}
