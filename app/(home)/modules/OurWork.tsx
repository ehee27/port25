import ImageIso from '@/app/components/ImageIso'
import Image from 'next/image'
import mahomes from '../../../public/27Art.png'
import safeTravels from '../../../public/STG.png'
import homes from '../../../public/kc-homes.png'
import nfl from '../../../public/nfl.png'
import sho from '../../../public/shoT.png'
import avatar from '../../../public/avatar.webp'
import Button from '@/app/components/Button'

const OurWork = () => {
  return (
    <section className="bg-dark py-9 md:py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8">
          Our <span className="text-green text-center md-8">Work</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div key={i}>
              <h3 className="mb-4">{project.title}</h3>
              <div className="border-8 border-green rounded-lg">
                <ImageIso src={project.image} alt={`project${i}`} />
              </div>

              <div className="flex justify-between gap-2 mt-2">
                {project.stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <h3 className="text-green mb-2">{s.value}</h3>
                    <p className="font-bold">{s.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-4 justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image src={project.review.image} alt="project review" />
                  </div>
                  <div>
                    <h5 className="mb-1">{project.review.name}</h5>
                    <p className="text-xl font-bold">
                      {project.review.position}
                    </p>
                  </div>
                </div>
                <p className="italic text-center">{project.review.text}</p>
              </div>
              <Button />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    title: 'Project Title',
    image: sho,
    link: 'https://sl27dev.com/',
    stats: [
      { value: '+218%', description: 'Description text here.' },
      { value: '+22%', description: 'Description text here.' },
      { value: '+81%', description: 'Description text here.' },
    ],
    review: {
      name: 'John',
      image: sho,
      position: 'CEO, Company',
      text: 'The team at TwoSeven is cool as fuck. Thanks Scott for being like cool n stuff.',
    },
  },
  {
    title: 'Project Title',
    image: sho,
    link: 'https://sl27dev.com/',
    stats: [
      { value: '+218%', description: 'Description text here.' },
      { value: '+22%', description: 'Description text here.' },
      { value: '+81%', description: 'Description text here.' },
    ],
    review: {
      name: 'John',
      image: avatar,
      position: 'CEO, Company',
      text: 'The team at TwoSeven is cool as fuck. Thanks Scott for being like cool n stuff.',
    },
  },
  {
    title: 'Project Title',
    image: sho,
    link: 'https://sl27dev.com/',
    stats: [
      { value: '+218%', description: 'Description text here.' },
      { value: '+22%', description: 'Description text here.' },
      { value: '+81%', description: 'Description text here.' },
    ],
    review: {
      name: 'John',
      image: avatar,
      position: 'CEO, Company',
      text: 'The team at TwoSeven is cool as fuck. Thanks Scott for being like cool n stuff.',
    },
  },
  {
    title: 'Project Title',
    image: sho,
    link: 'https://sl27dev.com/',
    stats: [
      { value: '+218%', description: 'Description text here.' },
      { value: '+22%', description: 'Description text here.' },
      { value: '+81%', description: 'Description text here.' },
    ],
    review: {
      name: 'John',
      image: avatar,
      position: 'CEO, Company',
      text: 'The team at TwoSeven is cool as fuck. Thanks Scott for being like cool n stuff.',
    },
  },
]

export default OurWork
