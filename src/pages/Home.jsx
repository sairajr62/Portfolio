import React from 'react'
import image from '../assets/coding p.png'
import { TypeAnimation } from 'react-type-animation';
function Home() {
  return (
    <div className='text-3xl mx-10 my-20 pr-1.5 text-center grid-flow-row'>
      <>
      <TypeAnimation
      sequence={[
        'Hi, I Am Sairaj Rane.',
        1000, 
        'I Am A Frontend Web Developer!',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    <div className='flex justify-end '>
    <img className='h-72 w-72 object-cover' src={image} alt='Coding'/>
    </div>
      </>
    </div>
  )
}

export default Home
