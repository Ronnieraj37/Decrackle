import React,{useState} from 'react'

const Login = () => {
    const [newUser, setnewUser] = useState(false);
    const [name, setname] = useState('');
    const [lname, setlname] = useState('');
    const [mail, setmail] = useState('');
    const [password, setpassword] = useState('');
  return (
    <div className='flex w-full h-full items-center justify-center'>
        { newUser ? 
        <div className='w-3/5 min-w-[615px] h-2/3 relative borderDash flex-col justify-center items-center rounded-2xl '>
            <div className='flex rounded-3xl flex-col justify-center items-center w-full h-full'>
            <p className='text-3xl my-6 '>Sign Up</p>
            <div className='flex w-4/6 items-center justify-around'>
            <div className='items-start w-[46%] flex-col'>
            <p className='mx-3 my-1'>First Name*</p>
            <input onClick={(event)=>{setname(event.target.value)}} className='w-full bg-[#1e1e1e]  py-2 px-5 rounded-lg ' placeholder=' Name' type='text'/>
            </div>
            <div className='items-start w-[46%] flex-col'>
            <p className='mx-3 my-1'>Last Name*</p>
            <input onClick={(event)=>{setlname(event.target.value)}} className=' bg-[#1e1e1e] w-full py-2 px-5 rounded-lg ' placeholder=' Name' type='text'/>
            </div>
            </div>
            <div className='w-4/6 flex flex-col '>
            <p className='mx-4 my-1'>Email</p>
            <div className='flex-col w-full flex items-center '>
            <input onChange={(event)=>{setmail(event.target.value)}}  className=' bg-[#1e1e1e] w-[95%] py-2 px-5 rounded-lg ' placeholder=' john@xyz' type='text'/>
            </div>
            </div>
            <div className='w-4/6 my-1 flex flex-col '>
            <p className='mx-4 my-1'>Password</p>
            <div className='flex-col w-full flex items-center '>
            <input onChange={(event)=>{setpassword(event.target.value)}} className=' bg-[#1e1e1e] w-[95%] py-2 px-5 rounded-lg' placeholder='Password' type='password'/>
            </div>
            </div>
            <div className='flex w-4/6 flex-col items-center justify-center '>
            <button className='w-[85%] bg-[#98d12f] text-black my-2 rounded-3xl px-5 py-2'>Register</button>
            </div>
            <div className='flex w-4/6  items-center justify-center '>
            <p>Already a User?</p>
            <button className='underline text-[#98d12f] rounded-3xl px-5 py-2'>Sign In</button>
            </div>
            </div>
        </div>
        :
        <div className='w-3/5 min-w-[615px] h-2/3 relative borderDash flex-col justify-center items-center rounded-2xl '>
            <div className='flex rounded-3xl flex-col justify-center items-center w-full h-full'>
            <p className='text-3xl my-6 '>Login</p>
            <div className='w-4/6 flex flex-col '>
            <p className='mx-4 my-1'>Email</p>
            <div className='flex-col w-full flex items-center '>
            <input onChange={(event)=>{setmail(event.target.value)}}  className=' bg-[#1e1e1e] w-[95%] py-2 px-5 rounded-lg ' placeholder=' john@xyz' type='text'/>
            </div>
            </div>
            <div className='w-4/6 my-1 flex flex-col '>
            <p className='mx-4 my-1'>Password</p>
            <div className='flex-col w-full flex items-center '>
            <input onChange={(event)=>{setpassword(event.target.value)}}  className=' bg-[#1e1e1e] w-[95%] py-2 px-5 rounded-lg ' placeholder='Password'  type='password'/>
            </div>
            </div>
            <div className='flex w-4/6 my-1 flex-col items-center justify-center '>
                <button className='w-[85%] bg-[#98d12f] text-black my-2 rounded-3xl px-5 py-2'>Submit</button>
            </div>
            <div className='flex w-4/6 my-1  items-center justify-center '>
                <p>Do not have an Account?</p>
                <button onClick={()=>{setnewUser(true)}} className='underline text-[#98d12f] rounded-3xl px-5 py-2'>Sign Up</button>
            </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Login