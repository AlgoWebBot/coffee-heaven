import React, { useState } from 'react'
import banner from '/images/more/1.png'
import { AiFillEye } from 'react-icons/ai';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Coffees = ({ coffees }) => {

    return (
        <div className='min-h-screen w-full my-20' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}>
            <div className='text-center space-y-4'>
                <h1 className='text-lg font-thin'>---Sip & Savor---</h1>
                <h1 className="text-7xl font-primary text-[#331A15] drop-shadow-2xl">Our Popular Products</h1>
                <button className='text-2xl text-white bg-[#E3B577] input input-bordered border-[#331A15]'>
                    <Link to='/addCoffee'>
                        Add Coffee
                    </Link>
                </button>

            </div>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>
                
                {
                    coffees.map(coffee => 
                    
                        <div key={coffee._id} className='bg-[#F5F4F1] flex justify-around items-center gap-10 rounded-lg bg-blend-overlay bg-opacity-70'>
                            <div className='flex justify-start items-center gap-10'>
                                <img src={coffee?.photoURL} alt="" />
                                <div className='space-y-2'>
                                    <p><strong>Name: </strong>{ coffee?.name }</p>
                                    <p><strong>Chef: </strong>{coffee?.chef }</p>
                                    <p><strong>Price: </strong>890 Taka</p>
                                </div>
                            </div>
                            <div className='text-3xl space-y-6'>
                                <Link to={`/coffees/${coffee._id}`}>
                                    <AiFillEye className='bg-[#dcb889] h-10 w-10 p-2 rounded-lg text-white' />
                                </Link>
                                <MdModeEdit className='bg-[black] h-10 w-10 p-2 rounded-lg text-white' />
                                <MdDelete className='bg-[#EA4744] h-10 w-10 p-2 rounded-lg text-white' />
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Coffees