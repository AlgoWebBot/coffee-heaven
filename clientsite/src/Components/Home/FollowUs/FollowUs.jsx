import React from 'react'

const FollowUs = () => {
  return (
      <div className='min-h-screen w-full my-20'>
          <div className='text-center space-y-4 mb-10'>
              <h1 className='text-lg font-thin'>Follow Us Now</h1>
              <h1 className="text-7xl font-primary text-[#331A15] drop-shadow-2xl">Follow on Instagram</h1>
          </div>
          <div className='container mx-auto flex justify-center items-center'>
              <div className='grid grid-cols-4 gap-5 lg:gap-20'>
                  <img src="/images/cups/Rectangle 9.png" alt="" />
                  <img src="/images/cups/Rectangle 10.png" alt="" />
                  <img src="/images/cups/Rectangle 11.png" alt="" />
                  <img src="/images/cups/Rectangle 12.png" alt="" />
                  <img src="/images/cups/Rectangle 13.png" alt="" />
                  <img src="/images/cups/Rectangle 14.png" alt="" />
                  <img src="/images/cups/Rectangle 15.png" alt="" />
                  <img src="/images/cups/Rectangle 16.png" alt="" />
                  <img src="/images/cups/Rectangle 17.png" alt="" />
              </div>
          </div>
      </div>
  )
}

export default FollowUs