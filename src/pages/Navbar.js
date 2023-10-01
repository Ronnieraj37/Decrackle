import React,{useState} from 'react'
import {FaRegCircleUser} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react'
import {AiOutlineCheckSquare} from "react-icons/ai";
import {RiDeleteBin6Line} from "react-icons/ri";
import { Menu, Transition } from '@headlessui/react'
const Navbar = () => {
  const [isLoggedin, setisLoggedin] = useState(true);
  const [notifications, setnotifications] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non. Et malesuada fames ac turpis. Diam ut venenatis tellus in metus.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non. Et malesuada fames ac turpis. Diam ut venenatis tellus in metus.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non. Et malesuada fames ac turpis. Diam ut venenatis tellus in metus.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non. Et malesuada fames ac turpis. Diam ut venenatis tellus in metus.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non. Et malesuada fames ac turpis. Diam ut venenatis tellus in metus."]);
  const navigate = useNavigate();
  return (
    <div className='p-6 h-[10%] min-h-[90px] flex items-end justify-end' >
        <button onClick={()=>{navigate("/faq")}} className='mx-5 p-3 '>FAQs</button>
        <button onClick={()=>{navigate("/how-to-use")}}  className='mx-5 p-3'>How to use</button>
        <button onClick={()=>{navigate("/support")}}  className='mx-5 p-3'>Support</button>
        <button onClick={()=>{navigate("/how-to-use")}}  className='mx-5 p-3'>Plans</button>
        {isLoggedin ? 
        <button onClick={()=>{navigate("/login")}} className="flex mx-5 relative p-3  items-center justify-center">
          <FaRegCircleUser size={25}/>
          <p className='absolute top-0.5 bg-[#b80605] rounded-3xl py-[3px] px-[7px] right-0.5 text-xs'>?</p>
        </button>
        :
        <Menu as="div" className="relative inline-block text-left">
            <div className=''>
              <Menu.Button className="flex mx-5 relative p-3  items-center justify-center">
                <FaRegCircleUser size={25}/>
                { notifications !== 0 && 
                <p className='absolute top-0.5 bg-[#b80605] rounded-3xl py-[3px] px-[7px] right-0.5 text-xs'>{notifications.length}</p>
                }
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 text-white w-[500px] border-white border-[1px] border-opacity-20 origin-top-right bg-[black] shadow-lg ring-1 ring-gray-600 ring-opacity-5 rounded-xl focus:outline-none">
                <div className="py-1  flex flex-col items-center justify-center">
                  <div className="hover:bg-[#1e1e1e] text-lg items-center  flex border-b-[1px] border-white border-opacity-30 w-full  px-4 py-2">
                    <p>Notifications</p>
                    <div className="absolute right-5 flex" >
                    <AiOutlineCheckSquare className='mx-2'  size={25}/>
                    <RiDeleteBin6Line className='mx-2' size={25}/>
                    </div>
                  </div>
                  {notifications.map((message,key)=>{
                    return(
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className="hover:bg-[#1e1e1e] border-b-[1px] border-white border-opacity-30 w-full  px-4 py-2 text-sm"
                          >
                            {message}
                          </button>
                        )}
                      </Menu.Item>
                    )
                  })}
                </div>
              </Menu.Items>
            </Transition>
        </Menu>
        }
    </div>
  )
}

export default Navbar