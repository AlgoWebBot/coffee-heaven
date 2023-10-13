import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';


const CoffeeDetails = () => {

    const coffee = useLoaderData();
    // console.log(coffee)

    return (
        <div className=' container mx-auto py-10'>
            <Link to='/'>
                <div className='flex justify-start container mx-auto items-center gap-2 mb-10'>
                    <BsArrowLeft className='text-3xl font-bold text-[#331A15]' />
                    <p className='text-2xl font-bold font-primary text-[#331A15]'>Back to home</p>
                </div>
                <div className='bg-[#F4F3F0] py-32 flex justify-center items-center flex-col lg:flex-row lg:gap-20'>
                    <img src={coffee?.photoURL} alt="" />
                    <div className='space-y-1'>
                        <h1 className='text-4xl font-bold mb-5 text-[#331A15] font-primary'>Nichest</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Name: </strong>{ coffee?.name }</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Chef: </strong>{ coffee?.chef }</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Supplier: </strong>{ coffee?.supplier }</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Taste: </strong>{ coffee?.taste }</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Category: </strong>{ coffee?.category }</h1>
                        <h1 className='text-lg font-thin text-gray-600'><strong className='font-bold text-black'>Details: </strong>{ coffee?.details }</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CoffeeDetails