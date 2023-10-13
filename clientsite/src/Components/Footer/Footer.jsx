import React from 'react'
import cover from '/images/more/13.jpg'
import cover2 from '/images/more/15.jpg'
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='pt-24' style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover' }}>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 justify-center items-center">
                <div className='space-y-4'>
                    <img src="/images/more/logo1.png" alt="" className='h-20' />
                    <h1 className='text-4xl font-bold font-primary text-[#331A15] drop-shadow-2xl'>Coffee Heaven</h1>
                    <p className='text-lg font-thin text-[#331A15]'>Always ready to be your friend. Come & Contact with us to share your <br />memorable moments, to share with your best companion.</p>
                    <div className='text-4xl text-[#331A15] flex justify-start items-center gap-5'>
                        <BsFacebook />
                        <BsTwitter />
                        <AiFillInstagram />
                        <AiFillLinkedin />
                    </div>
                    <h1 className='text-4xl font-bold font-primary text-[#331A15] drop-shadow-2xl'>Get in Touch</h1>
                    <div className='text-[#331A15] flex justify-start items-center gap-4 text-lg'>
                        <IoCall />
                        <p>01714760739</p>
                    </div>
                    <div className='text-[#331A15] flex justify-start items-center gap-4 text-lg'>
                        <MdEmail />
                        <p>coffeheaven@yahoo.com</p>
                    </div>
                    <div className='text-[#331A15] flex justify-start items-center gap-4 text-lg'>
                        <FaLocationDot />
                        <p>New Market, Rajshahi-6220</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl font-bold font-primary text-[#331A15] drop-shadow-2xl'>Connect With Us</h1>
                    <div className='space-y-6 mt-10'>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full border-none" />
                        <input type="text" name='name' placeholder="Email" className="input input-bordered w-full border-none" />
                        <input type="text" name='name' placeholder="Message" className="input input-bordered w-full border-none h-20" />
                        <button className='font-primary text-[#331A15] btn input input-bordered bg-transparent border-[#331A15] px-6 py-1 hover:bg-transparent hover:border-[#331A15] rounded-full capitalize'>Send Message</button>
                    </div>
                </div>
            </div>
            <div className='h-20 mt-10 flex justify-center items-center' style={{ backgroundImage: `url(${cover2})`, backgroundSize: 'cover' }}>
                <h1 className='text-white font-primary text-xl text-center'>Copyright Coffee Heaven ! All Right Reserve</h1>
            </div>
        </div>
    )
}

export default Footer