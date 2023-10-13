import React from 'react'
import banner from '/images/more/Rectangle2.png'
import Coffees from './Coffees/Coffees'
import FollowUs from './FollowUs/FollowUs'
import AddCoffee from '../AddCoffee/AddCoffee'

const Home = () => {
    return (
        <div>
            <div className='relative'>
                <img src={banner} alt="" className='w-full h-[600px]' />
                <div className='absolute top-1/2 left-1/2 transform  -translate-y-1/2 space-y-4'>
                    <h1 className='text-7xl font-primary text-white'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-white text-base font-thin'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of<br>

                    </br>every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='text-xl dont-primary bg-[#E3B577] py-3 px-5 font-primary font-thin'>Learn More</button>
                </div>
            </div>
            <div className='bg-[#ECEAE3] h-[172px]'>
                <div className='flex justify-center items-center'>
                    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-4 lg:gap-20 p-2'>
                        <div>
                            <img src="/images/icons/1.png" alt="" />
                            <h1 className='text-3xl font-bold font-primary'>Awsome Aroma</h1>
                            <p className="text-base font-thin">You will definitely be a fan of the design<br />& aroma of your coffee</p>
                            {/* {The coffee is made of the green coffee beans which you will love} */}
                        </div>
                        <div>
                            <img src="/images/icons/2.png" alt="" />
                            <h1 className='text-3xl font-bold font-primary'>High Quality</h1>
                            <p className="text-base font-thin">We served the coffee to you maintaining <br />the best quality</p>

                        </div>
                        <div>
                            <img src="/images/icons/3.png" alt="" />
                            <h1 className='text-3xl font-bold font-primary'>Pure Grades</h1>
                            <p className="text-base font-thin">The coffee is made of the green coffee <br />beans which you will love</p>

                        </div>
                        <div>
                            <img src="/images/icons/4.png" alt="" />
                            <h1 className='text-3xl font-bold font-primary'>Proper Roasting</h1>
                            <p className="text-base font-thin">Your coffee is brewed by first roasting <br />the green coffee beans</p>

                        </div>
                    </div>
                </div>
            </div>
            <Coffees />
            <FollowUs />
        </div>
    )
}

export default Home