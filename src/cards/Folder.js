import React from 'react'
import {PiDotsThreeOutlineVerticalLight} from "react-icons/pi";
const Folder = ({folder,i}) => {
  return (
    <div className='bg-[#1e1e1e] relative h-[87px] w-[243px] items-center flex-col flex justify-center text-lg rounded-2xl  m-3 '>
        {folder}
        <p className='text-sm font-light'>Files : 24</p>
        <PiDotsThreeOutlineVerticalLight className='absolute top-4 right-2' size={28}/>
    </div>
  )
}

export default Folder