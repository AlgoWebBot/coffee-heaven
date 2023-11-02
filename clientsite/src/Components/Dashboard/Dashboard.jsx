import React, { useContext } from 'react'
import { MyContext } from '../../Context/AuthContext'
import { AiTwotoneEdit } from 'react-icons/ai';

const Dashboard = () => {

    const { user } = useContext(MyContext);

    return (
        <div className='h-screen'>
            <div className='w-full max-h-[300px] relative'>
                <img src="/images/more/7.png" className='w-full h-[300px] -z-100' />
                <div className='container mx-auto absolute top-40 left-40 '>
                    <img src={user?.photoURL ? user?.photoURL : "/images/cups/Rectangle 11.png"} className='w-[300px] h-[300px] rounded-full' />
                    {/* <AiTwotoneEdit className='text-3xl cursor-pointer' /> */}
                </div>
                <div className='container mx-auto pl-80 py-4 text-start space-y-2 flex justify-between'>
                    <div>
                        <h1 className="text-5xl font-primary font-bold ">{user?.displayName}</h1>
                        <h1 className="text-xl font-regular "><strong>Nickname: </strong> {user?.displayName}</h1>
                        <h1 className="text-xl font-regular "><strong>Email: </strong> {user?.email}</h1>
                        <h1 className="text-lg font-regular "><strong>Bio: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero totam quasi maxime vel tenetur doloribus possimus dicta, ea similique neque itaque eligendi consequuntur et sequi mollitia, exercitationem corrupti accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae, iste velit minus vitae non perferendis vel nemo aliquid officiis modi commodi consequatur recusandae ipsam omnis ab minima aut pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo quam voluptate minus eveniet totam libero at, maiores corrupti ipsam consectetur aperiam. Quod non ab veritatis molestiae aliquid quae incidunt voluptatem.</h1>
                    </div>
                    <div>
                        <button className='btn btn-success w-32 btn-outline font-primary capitalize text-lg font-thin cursor-pointer'>Edit Profile</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard