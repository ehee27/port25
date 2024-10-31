import Button from '@/app/components/Button'
import ImageIso from '@/app/components/ImageIso'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="bg-dark py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center mb-4 gap-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((item, i) => (
                  <Image
                    key={i}
                    src="/star.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <p className="text-sm font-bold text-green">5 Star Reviews</p>
            </div>

            <h1 className="mb-2">
              We build <span className="text-green">Professional</span> websites
            </h1>
            <p className="text-xl mb-4">
              <b>Goal oriented websites.</b> Sell more, get more leads, or
              present yourself to the whole world as you only imagined until
              now. We love when clients succeed.
            </p>
            <Button />
          </div>
          <ImageIso src="/nexus-icon-7.png" alt="mockup" />
        </div>
      </div>
    </div>
  )
}

export default Hero
