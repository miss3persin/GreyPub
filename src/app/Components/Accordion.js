'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border-b last:border-b-0 border-white text-white">
          <button
            onClick={() => toggleItem(index)}
            className="flex items-center justify-between w-full py-6 text-left"
          >
            <span className="text-sm font-normal">{item.title}</span>
            <Image
              src={openIndex === index ? item.iconOpen : item.iconClosed}
              alt="Toggle Icon"
              width={24}
              height={24}
            />
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ${
              openIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="pt-0 pb-8 text-sm font-extralight max-w-[46rem]">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
