import React,{useState} from 'react'
import {FaRegCircleUser} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [notifications, setnotifications] = useState(5);
  const navigate = useNavigate();
  return (
    <div className='p-6 h-[10%] min-h-[90px] flex items-end justify-end' >
        <button onClick={()=>{navigate("/faq")}} className='mx-5 p-3 '>FAQs</button>
        <button onClick={()=>{navigate("/how-to-use")}}  className='mx-5 p-3'>How to use</button>
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