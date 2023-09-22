import React from 'react'
import {SlOptionsVertical} from "react-icons/sl"

const FolderCard = ({folder,i}) => {
  return (
    <div className='bg-[#1e1e1e] relative px-5 text-lg rounded-xl py-4 m-3 '>
        {folder}
        <p className='text-sm font-light'>Files : 24</p>
        <button className='absolute right-4 top-4 '>
            <SlOptionsVertical size={20}/>
        </button>
    </div>
  )
}

export default FolderCard