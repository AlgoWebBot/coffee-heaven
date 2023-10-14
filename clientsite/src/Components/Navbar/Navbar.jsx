import React from 'react'
import navbanner from '/images/more/15.jpg'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='h-28 w-full flex justify-center items-center gap-4 relative' style={{ backgroundImage: `url(${navbanner})`, backgroundSize: 'cover' }}>
      <img src="/images/more/logo1.png" alt="" className='h-20' />
      <h1 className='text-white text-5xl font-bold font-primary tracking-wide'>Coffee Heaven</h1>

      <div className='flex justify-end items-center absolute right-32 gap-10'>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        <Link to='/login'>
          <button className='btn text-white bg-transparent input input-bordered border-white hover:bg-[#331A15] rounded-full'>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar