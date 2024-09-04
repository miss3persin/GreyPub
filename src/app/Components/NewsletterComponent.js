'use client'

import React, { useState } from 'react'

export const NewsletterComponent = ({ onSubscribe }) => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      if (email) {
        onSubscribe(email)
        setEmail('')
      }
    }

return (
    <div className="w-60">
      <h2 className="flex max-w-72 mb-5 font-medium flex-col gap-5 text-[0.8rem] leading-relaxed text-white">NEWSLETTER</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <input
          type="email"
          className="w-full sm:w-auto flex-1 px-3 py-3 rounded-md text-black placeholder-black custom-placeholder-style text-[0.8rem] focus:outline-none focus:ring-1 focus:[#FF4B26]"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-[#FF4B26] text-[0.8rem] font-light text-white py-[0.8rem] px-10 rounded-md hover:[#FF4B26] focus:outline-none focus:ring-1 focus:ring-[#FF4B26]"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  )
}
