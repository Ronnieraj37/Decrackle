import React,{useState} from 'react'
import {FaRegCircleUser} from "react-icons/fa6";
const Navbar = () => {
  const [notifications, setnotifications] = useState(5)
  return (
    <div className='p-10 flex items-end justify-end' >
        <button className='mx-5 p-3 '>FAQs</button>
        <button className='mx-5 p-3'>How to use</button>
        <button className='mx-5 p-3'>Support</button>
        <button className='mx-5 p-3'>Plans</button>
        <button className='mx-5 relative p-3 '>
            <FaRegCircleUser size={25}/>
            { notifications !== 0 && 
            <p className='absolute top-0.5 bg-[#b80605] rounded-3xl py-[3px] px-[7px] right-0.5 text-xs'>{notifications}</p>
            }
        </button>
    </div>
  )
}

export default Navbar