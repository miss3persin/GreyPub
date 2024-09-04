import React from 'react'
import { SectionTitle } from '../Components/SectionTitle'
import { BlogButton } from '../Components/BlogButton';
import Image from 'next/image';

const blogs = [
    {
      image: "/blog_img.png",
      title: "Understanding React Context, Understanding React Context",
      link: "/blogs/react-context",
    },
    {
      image: "/blog_img.png",
      title: "A Guide to Next.js Routing",
      link: "/blogs/nextjs-routing",
    },
    {
      image: "/blog_img.png",
      title: "Mastering Tailwind CSS",
      link: "/blogs/tailwind-css",
    },
  ];

export const BlogSection = () => {
  return (
    <>
    <SectionTitle text='READ OUR BLOGS'/>

    <div className="flex container px-40 justify-between mt-28 mb-40">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="max-w-[18rem]"
        >
            <div className='overflow-hidden w-[18rem] h-48 rounded-2xl'>
          <Image
            src={blog.image}
            alt={blog.title}
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          </div>
          <div className="pt-6">
            <h2 className="text-white text-lg font-medium">{blog.title}</h2>
            <div className="mt-3">
              <BlogButton link={blog.link} />
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
