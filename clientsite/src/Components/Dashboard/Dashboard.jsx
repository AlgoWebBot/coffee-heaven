import React, { useContext } from 'react'
import { MyContext } from '../../Context/AuthContext'

const Dashboard = () => {

    const { user } = useContext(MyContext);

    return (
        <div className='h-screen'>
            <div className='w-full max-h-[300px] relative'>
                <img src="/images/more/7.png" className='w-full h-[300px] -z-100' />
                <div className='container mx-auto absolute top-40 left-40 '>
                    <img src={user?.photoURL ? user?.photoURL : "/images/cups/Rectangle 11.png"} className='w-[300px] h-[300px] rounded-full' />
                </div>
                <div className='container mx-auto pl-80 py-4 text-start space-y-2 flex justify-between'>
                    <div>
                        <h1 className="text-5xl font-primary font-bold ">{user?.displayName}</h1>
                        <h1 className="text-xl font-regular "><strong>Nickname: </strong> {user?.displayName}</h1>
                        <h1 className="text-xl font-regular "><strong>Email: </strong> {user?.email}</h1>
                    </div>
                    <div>
                        <button className='btn btn-success btn-outline font-primary capitalize text-lg font-thin cursor-pointer'>Edit Profile</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard