import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';


const CoffeeDetails = () => {
    return (
        <div className=' container mx-auto py-10'>
            <Link to='/'>
                <div className='flex justify-start container mx-auto items-center gap-2 mb-10'>
                    <BsArrowLeft className='text-3xl font-bold text-[#331A15]' />
                    <p className='text-2xl font-bold font-primary text-[#331A15]'>Back to home</p>
                </div>
                <div className='bg-[#F4F3F0] py-32 flex justify-center items-center flex-col lg:flex-row lg:gap-20'>
                    <img src="/images/more/16.png" alt="" />
                    <div className='space-y-1'>
                        <h1 className='text-4xl font-bold mb-5 text-[#331A15] font-primary'>Nichest</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Name: </strong>Americana</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Chef: </strong>Mr. Mukul Mia</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Supplier: </strong>Americana Coffee LTD.</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Taste: </strong>Sweet and Milky</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Category: </strong>Americano</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Details: </strong>Espresso with hot water</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CoffeeDetails