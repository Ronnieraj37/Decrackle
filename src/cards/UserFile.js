import React from 'react'
import {RiPlayCircleFill} from "react-icons/ri";
import {PiDotsThreeOutlineVerticalLight} from "react-icons/pi";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
const UserFile = ({file,i}) => {
  return (
        <div className='bg-[#1e1e1e] w-full relative flex justify-around px-4 py-[14px] border-opacity-30 border-gray-300 border-b-[2px] sm:border-[1px] '>
          <div className='flex w-[95%]  justify-around'>
            <p className='text-sm sm:text-lg'>{file}</p>
            <p className='font-light text-sm sm:text-base' >File Type</p>
            <div className='flex w-[150px] sm:w-[230px] font-light items-center'>
              {i%2 ===0 ? 
              <p className='mx-0.5 underline-offset-2 underline'>Transcription File</p>
              :
              <p className='mx-0.5 underline-offset-2 underline'>Audio File</p>
              }
            <RiPlayCircleFill className='mx-0.5' size={28}/>
            <p className='mx-0.5 text-sm'>200 MB</p>
            </div>
            <p className='font-light sm:flex hidden'>2023-09-26 06:25 PM</p>
          </div>
          <div className='w-[5%]'>
          <Menu as="div" className="relative inline-block text-left">
            <div className=''>
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
              <Menu.Items className="absolute right-0 z-10 mt-2 text-white w-52 border-white border-[1px] border-opacity-20 origin-top-right bg-[black] shadow-lg ring-1 ring-gray-600 ring-opacity-5 rounded-xl focus:outline-none">
                <div className="py-1  flex flex-col items-center justify-center">
                <Menu.Item>
                    {({ active }) => (
                      <button
                        className="hover:bg-[#1e1e1e] border-b-[1px] border-white border-opacity-30 w-full  px-4 py-2 text-sm"
                      >
                        Enhance Audio
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className="hover:bg-[#1e1e1e] border-b-[1px] border-white border-opacity-30 w-full  px-4 py-2 text-sm"
                      >
                        Generate Transcription
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className="hover:bg-[#1e1e1e] border-b-[1px] border-white border-opacity-30 w-full  px-4 py-2 text-sm"
                      >
                        Extract Music
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
                        className="hover:bg-[#1e1e1e] border-b-[1px] border-white border-opacity-30  w-full   px-4 py-2 text-sm"
                      >
                        Move
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

export default UserFile