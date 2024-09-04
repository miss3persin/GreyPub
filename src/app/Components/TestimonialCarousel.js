import React from 'react'
import { Testimonial } from './Testimonial'

export const TestimonialCarousel = ({ testimonials }) => {
    
    const testimonials = [
        {
          imageSrc: '/hypothetical-person.jpg',
          starRating: 4,
          testimonialText: '"Lorem ipsum dolor sit amet consectetur. Enim ut pharetra eget nibh aenean risus enim. Ipsum iaculis rhoncus natoque lobortis rhoncus."',
          authorName: 'Oluwasegunfunmi Ige-bello',
          authorTitle: 'Student',
        },
        {
          imageSrc: '/hypothetical-person.jpg',
          starRating: 5,
          testimonialText: '"Lorem ipsum dolor sit amet consectetur. Enim ut pharetra eget nibh aenean risus enim. Ipsum iaculis rhoncus natoque lobortis rhoncus."',
          authorName: 'Oluwasegunfunmi Ige-bello',
          authorTitle: 'Student',
        },
        {
          imageSrc: '/hypothetical-person.jpg',
          starRating: 5,
          testimonialText: '"Lorem ipsum dolor sit amet consectetur. Enim ut pharetra eget nibh aenean risus enim. Ipsum iaculis rhoncus natoque lobortis rhoncus."',
          authorName: 'Oluwasegunfunmi Ige-bello',
          authorTitle: 'Student',
        },
        {
          imageSrc: '/hypothetical-person.jpg',
          starRating: 5,
          testimonialText: '"Lorem ipsum dolor sit amet consectetur. Enim ut pharetra eget nibh aenean risus enim. Ipsum iaculis rhoncus natoque lobortis rhoncus."',
          authorName: 'Oluwasegunfunmi Ige-bello',
          authorTitle: 'Student',
        },
      ];

    const animationDuration = testimonials.length * 5;
  return (
    <div>
        <div
          className="flex gap-6 animate-scroll"
          style={{
            animationDuration: `${animationDuration}s`,
          }}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
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
    </div>
  )
}
