import React, { useState,useEffect } from 'react'
import {LiaFileUploadSolid} from "react-icons/lia";
import {BsDot} from "react-icons/bs";
import {FiUpload} from "react-icons/fi"
import Upload from '../components/Upload';
const Add = ({setfile,setselected}) => {
  const [modal, setmodal] = useState(false);
  useEffect(()=>{
    // setselected(1);
  },[])
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='h-4/5  w-3/5'>
      <div className='h-full w-full borderDash flex items-center justify-around  rounded-2xl '>
        <div className='h-2/3  flex flex-col items-center justify-around '>
        <LiaFileUploadSolid className='scale-125 rounded-full' size={50}/>
      {modal && <Upload setfile={setfile} setmodal={setmodal} /> } 
        <div className='flex flex-col items-center'>
          <button onClick={()=>{setmodal(true)}} className='flex px-24 py-2 rounded-3xl bg-[#a3db3c]'>
            {/*Add gradient to button*/}
        <p className='my-1 mx-1 text-black '>Upload the File</p>
        <FiUpload className='my-1 mx-1 text-black ' size={20}/>
          </button>
        <p className='my-1'>Or drag here</p>
        </div>
        <div className='flex items-center'>
        <BsDot size={25}/>
        <p> Audio and Video file only</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Add