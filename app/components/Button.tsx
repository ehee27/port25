import { BsArrowRight } from 'react-icons/bs'

const Button = () => {
  return (
    <button className="flex justify-center items-center w-full md:w-auto gap-4 bg-green hover:bg-blue-700 text-white text-lg md:text-xl font-bold py-2 px-4 rounded">
      <span>Contact Us</span>
      <BsArrowRight />
    </button>
  )
}

export default Button
