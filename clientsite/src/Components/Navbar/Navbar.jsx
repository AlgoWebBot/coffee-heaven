import React from 'react'
import navbanner from '/images/more/15.jpg'


const Navbar = () => {
  return (
      <div className='h-28 w-full flex justify-center items-center gap-4' style={{ backgroundImage: `url(${navbanner})`, backgroundSize: 'cover' }}>
          <img src="/images/more/logo1.png" alt="" className='h-20' />
          <h1 className='text-white text-5xl font-bold font-primary tracking-wide'>Coffee Heaven</h1>
      </div>
  )
}

export default Navbar