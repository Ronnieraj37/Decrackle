import React, { useEffect,useState } from 'react'
import {BsSearch,BsChevronDown} from "react-icons/bs";
import Folder from '../cards/Folder';
import {IoAddCircleOutline} from "react-icons/io5";
import UserFile from '../cards/UserFile';
import { useNavigate } from 'react-router-dom';
const Folders = () => {
  const navigate = useNavigate();
  const [folders, setfolders] = useState(['Folder Name 1','Folder Name 2','Folder Name 3','Folder Name 4','Folder Name 5','Folder Name 6','Folder Name 7','Folder Name 8']);
  const [userFiles, setuserFiles] = useState(['File Name 1','File Name 2','File Name 3','File Name 4','File Name 5','File Name 6','File Name 7','File Name 8']);
  const getData=()=>{
    //get folders
    //get files
  }
  useEffect(()=>{
    getData();
  })
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
        <p className='mx-1'>Sort</p>
        <BsChevronDown className='mx-1' size={18}/>
      </button>
      </div>
      </div>
      <div className='w-[90%] h-[90%] mt-6 flex flex-col '>
      <div className=' h-[45%] relative '>
       <p className='text-2xl absolute left-0 top-0'>Folders</p>
       <p className='text-lg absolute right-0 top-0'>View All</p>
       <div className=' flex-col mt-10 grid grid-cols-4  '>
       <button className=' flex flex-col items-center justify-center border-[1px] border-gray-400 h-[87px] w-[243px] text-lg rounded-2xl   m-3 '>
        <IoAddCircleOutline size={26}/>
        <p>Create new</p>
       </button>
        {
          folders.map((folder,i)=>{
            if(i>=7){
              return null;
            }
            return(
                <button onClick={()=>{navigate(`/folders/${i+1}`)}}>
                  <Folder folder={folder} i={i}/>
                </button>
            )
          })
        }
       </div>
      </div>
      <div className='flex h-[53%] flex-col relative justify-center items-center'>
      <p className='text-2xl absolute left-0 top-0'>Files</p>
        <div className='flex w-full mt-10 flex-col overflow-auto'>
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

export default Folders