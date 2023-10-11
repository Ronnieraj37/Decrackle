import React,{useState} from 'react'
import {FaRegCircleUser} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react'
import { Popover } from '@headlessui/react'
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineCheckSquare} from "react-icons/ai";
import {IoAddCircleOutline} from "react-icons/io5";
import {RiDeleteBin6Line} from "react-icons/ri";
import { Menu, Transition } from '@headlessui/react'
const Navbar = () => {
  const [isLoggedin, setisLoggedin] = useState(true);
  const [notifications, setnotifications] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non. Et malesuada fames ac turpis. Diam ut venenatis tellus in metus.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non. Et malesuada fames ac turpis. Diam ut venenatis tellus in metus.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non. Et malesuada fames ac turpis. Diam ut venenatis tellus in metus.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non. Et malesuada fames ac turpis. Diam ut venenatis tellus in metus.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non. Et malesuada fames ac turpis. Diam ut venenatis tellus in metus."]);
  const navigate = useNavigate();
  return (
    <div className='h-[10%] sm:h-[10%] sm:flex items-end justify-end' >
      <div className='min-h-[90px] p-6  hidden sm:flex items-end justify-end'>
        <button onClick={()=>{navigate("/faq")}} className='mx-5 p-3 '>FAQs</button>
        <button onClick={()=>{navigate("/how-to-use")}}  className='mx-5 p-3'>How to use</button>
        <button onClick={()=>{navigate("/support")}}  className='mx-5 p-3'>Support</button>
        <button onClick={()=>{navigate("/how-to-use")}}  className='mx-5 p-3'>Plans</button>
        {isLoggedin ? 
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
                      <button>
                    <AiOutlineCheckSquare className='mx-2'  size={25}/>
                      </button>
                      <button>
                    <RiDeleteBin6Line className='mx-2' size={25}/>
                      </button>
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
        :
        <button onClick={()=>{navigate("/login")}} className="flex mx-5 relative p-3  items-center justify-center">
          <FaRegCircleUser size={25}/>
        </button>
        }
      </div>
      <div className='h-full relative w-full items-center justify-around sm:hidden flex '>
          <div className='absolute flex  px-3 py-3 left-0 top-0'>
          <Popover>
          <Popover.Button><AiOutlineMenu className='m-2' size={34}/></Popover.Button>
            <Popover.Panel className="absolute z-10 bg-[#1e1e1e] text-lg mt-2 text-white  border-white border-[1px] border-opacity-20 origin-top-right shadow-lg ring-1 ring-gray-600 ring-opacity-5 rounded-xl focus:outline-none">
              <div className="flex flex-col">
                <a href="/faq" className='items-center flex border-b-[1px] border-white border-opacity-30 w-[140px]  px-4 py-2'>FAQs</a>
                <a href="/how-to-use" className='items-center flex border-b-[1px] border-white border-opacity-30 w-[140px]  px-4 py-2'>How To Use</a>
                <a href="/support" className='items-center flex border-b-[1px] border-white border-opacity-30 w-[140px]  px-4 py-2'>Support</a>
                <a href="/faq" className='items-center flex border-b-[1px] border-white border-opacity-30 w-[140px]  px-4 py-2'>Plans</a>
              </div>
            </Popover.Panel>
          </Popover>
          <div onClick={()=>{navigate("/")}} className='flex w-full mx-2 justify-center sm:scale-100 scale-95 items-center  '>
              <div className=' scale-[80%] sm:scale-110 mx-2'>
            <svg width="29" height="46" viewBox="0 0 29 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_di_1_312)">
              <path d="M24.4017 25.8385C24.4017 27.2359 23.5238 28.6891 21.7127 29.8597C19.9155 31.0212 17.3499 31.7849 14.445 31.7849C11.5402 31.7849 8.97455 31.0212 7.17742 29.8597C5.36633 28.6891 4.48834 27.2359 4.48834 25.8385C4.48834 24.4411 5.36633 22.9879 7.17742 21.8174C8.97455 20.6558 11.5402 19.8922 14.445 19.8922C17.3499 19.8922 19.9155 20.6558 21.7127 21.8174C23.5238 22.9879 24.4017 24.4411 24.4017 25.8385Z" stroke="#F4F4F4" stroke-width="2.76575"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15116 29.8295C4.60966 30.2483 4.11191 30.7029 3.66391 31.1887C4.17113 31.9414 4.79955 32.6344 5.52837 33.2514C4.98385 33.9532 4.76575 34.6396 4.76575 35.2301C4.76575 36.2342 5.39643 37.5155 7.19043 38.6787C8.95744 39.8243 11.5638 40.6233 14.5842 40.6233C17.6045 40.6233 20.2109 39.8243 21.9779 38.6787C23.7719 37.5155 24.4026 36.2342 24.4026 35.2301C24.4026 34.584 24.1415 33.8232 23.4775 33.053C24.1682 32.435 24.761 31.7461 25.2367 31.0018C24.5317 30.271 23.7121 29.6144 22.7993 29.0493C25.4748 30.5455 27.1683 32.7596 27.1683 35.2301C27.1683 39.7361 21.5342 43.389 14.5842 43.389C7.63412 43.389 2 39.7361 2 35.2301C2 33.1591 3.19013 31.2683 5.15116 29.8295ZM21.5323 31.5102C19.7338 30.327 17.3534 29.5602 14.5385 29.5602C11.317 29.5602 8.66455 30.5645 6.80224 32.0479C6.92511 31.9585 7.05442 31.8697 7.19043 31.7815C8.95744 30.6358 11.5638 29.8369 14.5842 29.8369C17.3599 29.8369 19.786 30.5117 21.5323 31.5102Z" fill="#F4F4F4"/>
              <path d="M24.4028 25.562V1.5" stroke="#F4F4F4" stroke-width="2.76575" stroke-linejoin="round"/>
              </g>
              <defs>
              <filter id="filter0_di_1_312" x="0.8348" y="0.584788" width="27.4989" height="44.4357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="0.46608"/>
              <feGaussianBlur stdDeviation="0.5826"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_312"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_312" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="-0.915212"/>
              <feGaussianBlur stdDeviation="0.915212"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_312"/>
              </filter>
              </defs>
            </svg>
              </div>
            <p className='text-2xl'>Decrackle</p>
          </div>
          </div>
          <div className=' absolute px-3 py-5 flex right-0 top-0 '>
          <button onClick={()=>{navigate("/")}} className="text-[#baef57] scale-110  " >
            <IoAddCircleOutline size={34}/>
          </button>
          {isLoggedin ? 
            <Menu as="div" className="relative items-center justify-center text-left">
                <div className=''>
                  <Menu.Button className="flex mx-3 items-center justify-center">
                    <FaRegCircleUser size={30}/>
                    { notifications !== 0 && 
                    <p className='absolute -top-2 bg-[#b80605] rounded-3xl py-[3px] px-[7px] right-1 text-xs'>{notifications.length}</p>
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
                  <Menu.Items className="absolute w-[300px] sm:scale-100 scale-90 right-0 z-10 mt-2 text-white  border-white border-[1px] border-opacity-20 origin-top-right bg-[black] shadow-lg ring-1 ring-gray-600 ring-opacity-5 rounded-xl focus:outline-none">
                    <div className="py-1  flex flex-col items-center justify-center">
                      <div className="hover:bg-[#1e1e1e] text-lg items-center  flex border-b-[1px] border-white border-opacity-30 w-full  px-4 py-2">
                        <p>Notifications</p>
                        <div className="absolute right-5 flex" >
                          <button>
                        <AiOutlineCheckSquare className='mx-2'  size={25}/>
                          </button>
                          <button>
                        <RiDeleteBin6Line className='mx-2' size={25}/>
                          </button>
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
            :
            <button onClick={()=>{navigate("/login")}} className="flex mx-3 items-center justify-center">
              <FaRegCircleUser size={30}/>
            </button>
          }
          </div>
      </div>
    </div>
  )
}

export default Navbar