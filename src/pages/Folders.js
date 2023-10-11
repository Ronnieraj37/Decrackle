import React, { useEffect,useState } from 'react'
import {BsSearch,BsChevronDown} from "react-icons/bs";
import {PiDotsThreeOutlineVerticalLight} from "react-icons/pi";
import {IoAddCircleOutline} from "react-icons/io5";
import UserFile from '../cards/UserFile';
import { useNavigate } from 'react-router-dom';
import Folder from '../cards/Folder';
const Folders = ({setselected}) => {
  const navigate = useNavigate();
  const [folders, setfolders] = useState(['button','Folder Name 1','Folder Name 2','Folder Name 3','Folder Name 4','Folder Name 5','Folder Name 6','Folder Name 7','Folder Name 8']);
  const [userFiles, setuserFiles] = useState(['File Name 1','File Name 2','File Name 3','File Name 4','File Name 5','File Name 6','File Name 7','File Name 8']);
  const getData=()=>{
    //get folders
    //get files
  }
  useEffect(()=>{
    setselected(5);
    getData();
  })
  return (
    <div className='w-full h-[90%] overflow-auto justify-start items-center flex flex-col '>
      <div className='w-full h-[7%] items-center'>
      <div className=' w-full h-full justify-center flex'>
      <div className='w-[80%] bg-[#1e1e1e] mx-2 relative rounded-lg border-[1px] border-neutral-300'>
      <div className='absolute left-0 p-3'>
      <BsSearch size={18}/>
      </div>
      <input placeholder='Search' className='w-full h-full bg-[#1e1e1e] py-4 px-12 rounded-lg ' type='text'/>
      </div>
      <button className='w-[10%] focus:dark:border-blue-200 items-center mx-2  justify-center flex bg-[#1e1e1e] rounded-lg border-[1px] border-neutral-300'>
        <p className='mx-1 sm:flex hidden '>Sort</p>
        <BsChevronDown className='mx-1' size={18}/>
      </button>
      </div>
      </div>
      <div className='w-[93%] h-[93%] my-2 flex flex-col '>
      <div className=' my-2 flex items-center justify-center flex-col relative'>
        <div className='flex  justify-between w-full'>
          <p className='text-2xl px-2 py-1'>Folders</p>
          <button onClick={()=>{navigate("/all-folders")}} className='text-lg hover:underline transition ease-in-out delay-75 px-2 py-1 underline-offset-4'>View All</button>
        </div>
       <div className=' grid lg:grid-cols-3 grid-cols-2 xl:grid-cols-4  '>
        {
          folders.map((folder,i)=>{
            if(i===0){
              return <button className='m-2 sm:m-4 flex flex-col items-center justify-center border-[1px] border-gray-400 h-[87px] w-[150px] sm:w-[243px] text-lg rounded-2xl '>
              <IoAddCircleOutline size={26}/>
              <p>Create new</p>
             </button>
            }
            if(i>3){
              return null;
            }
            return(
                <button className='z-0 m-2 sm:m-4 h-1/3 w-[150px] sm:w-[243px] rounded-xl' onClick={()=>{navigate(`/folders/${i}`)}}>
                  <Folder folder={folder} i={i}/>
                </button>
            )
          })
        }
       </div>
      </div>
      <div className='flex flex-col relative justify-start items-start'>
        <p className='text-2xl my-2 px-2'>Files</p>
        <div className='flex h-full  sm:rounded-none rounded-2xl  border-opacity-30 border-gray-300 border-[1px]  w-full flex-col overflow-auto'>
        {userFiles.map((userFile,i)=>{
          return(
            <UserFile file={userFile} i={i}/>
          )
        })}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Folders