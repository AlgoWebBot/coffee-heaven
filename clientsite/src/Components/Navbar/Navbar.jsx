import React, { useContext } from 'react'
import navbanner from '/images/more/15.jpg'
import { Link } from 'react-router-dom'
import { MyContext } from '../../Context/AuthContext'


const Navbar = () => {


  const { user, logOut } = useContext(MyContext);
  console.log(user)

  const handleLogOut = () => {
    logOut()
      .then(res => console.log("Successfully logout"))
      .catch(err => console.log(err));
  }

  return (
    <div className='h-28 w-full flex justify-center items-center gap-4 relative' style={{ backgroundImage: `url(${navbanner})`, backgroundSize: 'cover' }}>
      <img src="/images/more/logo1.png" alt="" className='h-20' />
      <h1 className='text-white text-5xl font-bold font-primary tracking-wide'>
        <Link to='/'>Coffee Heaven</Link>
      </h1>

      <div className='flex justify-end items-center absolute right-32 gap-10'>
        <h1 className='text-white text-xl font-primary'>{user?.displayName}</h1>
        {
          user &&
          <Link to='/dashboard'>
            <button className='btn capitalize text-white bg-transparent input input-bordered border-white hover:bg-[#331A15] rounded-full'>Dashboard</button>
          </Link>
        }
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL ? user?.photoURL : "/registrationImage/5100711-200.png" } />
            </div>
          </label>
          <ul tabIndex={0} className="menu hidden md:block menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
        {
          user ?
            <Link to='/'>
              <button onClick={handleLogOut} className='btn capitalize text-white bg-transparent input input-bordered border-white hover:bg-[#331A15] rounded-full'>Logout</button>
            </Link> : 
            <Link to='/login'>
              <button className='btn capitalize text-white bg-transparent input input-bordered border-white hover:bg-[#331A15] rounded-full'>Login</button>
            </Link>
        }
      </div>
    </div>
  )
}

export default Navbar