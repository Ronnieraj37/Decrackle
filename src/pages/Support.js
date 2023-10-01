import React,{useState} from 'react'

const Support = () => {
    const [comments, setcomments] = useState('');
  return (
    <div className='flex w-full h-full items-center justify-center'>
        
    <div className='w-3/5 min-w-[615px] h-2/3 relative borderDash flex-col justify-center items-center rounded-2xl '>
          <div className='flex rounded-3xl flex-col justify-center items-center w-full h-full'>
          <p className='text-3xl my-6 '>Send your query</p>
          <div className='flex w-4/6 items-center justify-around'>
            <div className='items-start w-[46%] flex-col'>
            <p className='mx-3 my-1'>First Name</p>
            <input className='w-full bg-[#1e1e1e]  py-2 px-5 rounded-lg ' placeholder=' Name' type='text'/>
            </div>
            <div className='items-start w-[46%] flex-col'>
            <p className='mx-3 my-1'>Last Name</p>
            <input className=' bg-[#1e1e1e] w-full py-2 px-5 rounded-lg ' placeholder=' Name' type='text'/>
            </div>
          </div>
          <div className='w-4/6 flex flex-col '>
            <p className='mx-4 my-1'>Email</p>
            <div className='flex-col w-full flex items-center '>
            <input className=' bg-[#1e1e1e] w-[95%] py-2 px-5 rounded-lg ' placeholder=' john@xyz' type='text'/>
            </div>
            </div>
          <div className='w-4/6 flex flex-col '>
            <p className='mx-4 my-1'>Your Message</p>
            <div className='w-full flex items-center justify-center'>
            <textarea
                className='min-h-[70px] max-h-[130px] p-2 bg-black w-[95%] border-[1px] my-1 border-white border-opacity-60 rounded-lg text-white'
                id="review-text"
                onChange={(event)=>{setcomments(event.target.value)}}
                placeholder="Context"
                rows={1}
                value={comments}
            />
            </div>
          </div>
          <div className='flex w-4/6 flex-col items-center justify-center '>
            <button className='w-[94%] bg-[#98d12f] text-black my-2 rounded-3xl px-5 py-1.5'>Submit</button>
          </div>
          </div>
    </div>
    </div>
  )
}

export default Support