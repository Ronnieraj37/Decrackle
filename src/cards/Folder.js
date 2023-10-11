import React from 'react'
import {PiDotsThreeOutlineVerticalLight} from "react-icons/pi";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';

const Folder = ({folder,i}) => {
  const clicked=(event)=>{
    event.cancelBubble = true;
   if(event.stopPropagation) event.stopPropagation();
    console.log("Clicked");
  }
  return (
    <div className='bg-[#1e1e1e] z-0 relative h-[87px] w-[150px] sm:w-[243px] items-center flex-col flex justify-center text-lg rounded-2xl '>
        <p className='sm:text-md text-base'>{folder}</p>
        <p className='text-sm font-light'>Files : 24</p>
        <div className='z-10 absolute sm:top-4 top-2 right-0 sm:right-2'>
        <Menu as="div" className="relative z-20 inline-block text-left">
            <div  onClick={clicked} className=''>
              <Menu.Button className="flex items-center justify-center">
                <PiDotsThreeOutlineVerticalLight aria-hidden="true" size={28}/>
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
              <Menu.Items className="absolute right-0 z-30 mt-2 text-white w-52 border-white border-[1px] border-opacity-20 origin-top-right bg-[black] shadow-lg ring-1 ring-gray-600 ring-opacity-5 rounded-xl focus:outline-none">
                <div className="py-1  flex flex-col items-center justify-center">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className="hover:bg-[#1e1e1e] border-b-[1px] border-white border-opacity-30 w-full  px-4 py-2 text-sm"
                      >
                        Add new File
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className="hover:bg-[#1e1e1e] border-b-[1px] border-white border-opacity-30 w-full  px-4 py-2 text-sm"
                      >
                        Info
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className="hover:bg-[#1e1e1e] border-b-[1px] border-white border-opacity-30 w-full  px-4 py-2 text-sm"
                      >
                        Rename
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className="hover:bg-[#1e1e1e]  w-full   px-4 py-2 text-sm"
                      >
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
        </Menu>
        </div>
    </div>
  )
}

export default Folder