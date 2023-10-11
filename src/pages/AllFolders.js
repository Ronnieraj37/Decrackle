import React, { useEffect,useState } from 'react'
import {BsSearch,BsChevronDown} from "react-icons/bs";
import Folder from '../cards/Folder';
import {IoAddCircleOutline} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const AllFolders = () => {
    const navigate = useNavigate();
    const [folders, setfolders] = useState(['Folder Name 1','Folder Name 2','Folder Name 3','Folder Name 4','Folder Name 5','Folder Name 6','Folder Name 7','Folder Name 8']);
    const getData=()=>{
      //get folders
    }
    useEffect(()=>{
      getData();
    })
    return (
      <div className='w-full h-[90%]  overflow-auto justify-start items-center flex flex-col '>
        <div className='w-full h-[10%] sm:items-start items-center'>
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
        <div className='w-[90%] h-[90%] mt-6 flex relative items-center sm:items-start justify-start flex-col '>
         <button onClick={()=>{navigate(-1)}} className='text-xl absolute left-0 top-0'>&larr; Back</button>
        <div className=' h-full w-full flex justify-center '>
         <div className=' flex-col mt-10 space-x-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  '>
         <button className=' flex flex-col items-center my-2 justify-center border-[1px] border-gray-400 h-[87px] w-[150px]  sm:w-[243px] text-lg rounded-2xl '>
          <IoAddCircleOutline size={26}/>
          <p>Create new</p>
         </button>
          {
            folders.map((folder,i)=>{
              return(
                  <button className='my-2 w-[150px] sm:w-[243px] ' onClick={()=>{navigate(`/folders/${i+1}`)}}>
                    <Folder folder={folder} i={i}/>
                  </button>
              )
            })
          }
         </div>
        </div>
        </div>
      </div>
    )
}

export default AllFolders