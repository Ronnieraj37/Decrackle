import React from 'react'

const FileCard = ({file}) => {
  return (
    <div>
        <div className='bg-[#1e1e1e] relative flex justify-around p-4 text-lg rounded-xl m-3 '>
            <p className='text-xl font-semibold'>{file}</p>
            <p>File Type</p>
            <p className='underline underline-offset-2'>Vocal File</p>
        </div>
    </div>
  )
}

export default FileCard