import React from 'react'
import twoSeven from '../../../public/27_med.png'
import graphic from '../../../public/nexus-icon-7.png'
import Image from 'next/image'
import Button from '@/app/components/Button'

const OurFocus = () => {
  return (
    <section className="bg-lightGray py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl text-center mb-8">
          <h2 className="mb-4">
            Our <span className="text-green">Focus</span>
          </h2>
          <p>We focus on building websites that help you achieve your goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="inline-block p-3 bg-gradient-to-r from-green to-[#50e2d3] rounded-lg">
                <Image
                  src={feature.image}
                  alt="feature"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="my-4">{feature.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: feature.description }} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button />
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    image: graphic,
    title: 'Feature',
    description:
      'Our professional UX/UI designers will create a unique design tailored to your brand.<br></br> This is the second part of the desricption.',
  },
  {
    image: graphic,
    title: 'Feature',
    description:
      'Our professional UX/UI designers will create a unique design tailored to your brand.<br></br> This is the second part of the desricption.',
  },
  {
    image: graphic,
    title: 'Feature',
    description:
      'Our professional UX/UI designers will create a unique design tailored to your brand.<br></br> This is the second part of the desricption.',
  },
  // {
  //   image: graphic,
  //   title: 'Feature',
  //   description:
  //     'Our professional UX/UI designers will create a unique design tailored to your brand.<br></br> This is the second part of the desricption.',
  // },
]

export default OurFocus
