import React,{useState} from 'react'
import {BsSearch,BsChevronDown} from "react-icons/bs";
import {IoMdAddCircleOutline} from "react-icons/io";
import {MdOutlineDelete} from "react-icons/md";
import UserFile from '../cards/UserFile';
import { useNavigate } from 'react-router-dom';
const FolderFiles = () => {
  const navigate = useNavigate();
  const [userFiles, setuserFiles] = useState(['File Name 1','File Name 2','File Name 3','File Name 4','File Name 5','File Name 6','File Name 7','File Name 8']);
  return (
    <div className='w-full h-[90%] justify-start items-center flex flex-col '>
      <div className='w-full h-[10%] items-center'>
      <div className=' w-full h-[50px]  justify-center flex'>
      <div className='w-[80%] bg-[#1e1e1e] mx-2 relative rounded-lg border-[1px] border-neutral-300'>
      <div className='absolute left-0 p-4'>
      <BsSearch size={18}/>
      </div>
      <input placeholder='Search' className='w-full h-full bg-[#1e1e1e] py-4 px-12 rounded-lg ' type='text'/>
      </div>
      <button className='w-[10%] focus:dark:border-blue-200 items-center mx-2  justify-center flex bg-[#1e1e1e] rounded-lg border-[1px] border-neutral-300'>
        <p className='mx-1 sm:flex hidden'>Sort</p>
        <BsChevronDown className='mx-1' size={18}/>
      </button>
      </div>
      </div>
      <div className='w-[90%] h-[90%] flex flex-col '>
        <div className='h-[10%] flex items-center justify-between w-full'>
          <button onClick={()=>{navigate(-1)}} className='text-xl'>&larr; Back</button>
          <p className='text-2xl'>Folder</p>
          <div className='flex  fill-white'>
        <IoMdAddCircleOutline className='mx-1.5' size={25}/>
        <MdOutlineDelete className='mx-1.5' size={25}/>
      </div>
        </div>
      <div className='flex h-[90%] flex-col relative justify-center items-center'>
        <div className='flex w-full sm:rounded-none  border-opacity-30 border-gray-300 border-[1px] rounded-2xl flex-col overflow-auto'>
        {userFiles.map((userFile,i)=>{
          return(
            <UserFile file={userFile} i={i}/>
          )
        })
        }
        </div>
      </div>
      </div>
    </div>
  )
}

export default FolderFiles