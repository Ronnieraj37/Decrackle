import React from 'react'
import {CgTranscript} from "react-icons/cg";
import {LuWand2} from "react-icons/lu";
import {VscFolderOpened} from "react-icons/vsc";
import{IoAddCircleOutline} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Home = ({selected, setselected}) => {
  const navigate = useNavigate();
  return (
    <div className="text-white w-full flex  h-[10%] sm:w-1/6 sm:h-screen sm:border-r-[1px] border-opacity-30 border-white bg-[#1e1e1e]">
      <div className=' items-center sm:scale-100 scale-90 w-full  sm:items-start justify-around h-full sm:h-4/5 flex flex-row sm:flex-col'>
        <div className='hidden sm:flex w-full justify-center px-3 py-2  items-center  '>
          <div className='scale-110 mx-2'>
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

        <p className='text-xl'>Decrackle</p>
        </div>
        <button onClick={()=>{setselected(1);navigate("/")}} className={` sm:flex hidden flex-col sm:flex-row px-3 py-2 border-b-4 border-l-0 sm:border-b-0 sm:border-l-4 items-center ${selected===1 ? "text-[#baef57] transition ease-in-out delay-100  border-[#baef57]" : " border-[#1e1e1e]"}`} >
        <IoAddCircleOutline className='mx-2' size={34}/>
        <p>Add New</p>
        </button>
        <button onClick={()=>{setselected(2);navigate("/speech")}} className={`flex scale-[90%] sm:scale-100 px-3 py-2 sm:py-2 flex-col sm:flex-row  border-b-4  border-l-0 sm:border-b-0 sm:border-l-4 items-center ${selected===2 ? "text-[#baef57] transition ease-in-out delay-100  border-[#baef57]" : " border-[#1e1e1e]"}`} >
        <LuWand2 className='mx-2' size={30}/>
        <p className='text-sm sm:text-base'>Speech Enhancement</p>
        </button>
        <button onClick={()=>{setselected(3);navigate("/transcription")}} className={`flex scale-[90%] sm:scale-100 px-3 flex-col sm:flex-row  py-1 sm:py-2  border-b-4  border-l-0 sm:border-b-0 sm:border-l-4 items-center ${selected===3 ? "text-[#baef57] transition ease-in-out delay-100  border-[#baef57]" : " border-[#1e1e1e]"}`} >
        <CgTranscript  className='mx-2' size={33}/>
        <p className='text-sm sm:text-base'>Transcription</p>
        </button>
        <button onClick={()=>{setselected(4);navigate("/music")}} className={`flex scale-[90%] sm:scale-100 px-3 py-1 sm:py-2 flex-col sm:flex-row   border-b-4  border-l-0 sm:border-b-0 sm:border-l-4 items-center ${selected===4 ? "text-[#baef57] transition ease-in-out delay-100  border-[#baef57]" : " border-[#1e1e1e]"}`} >
        <div className='scale-95 '>
        <svg width="44" height="51" viewBox="0 0 44 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.2" d="M40.8457 9.625V16.625H33.8457L40.8457 9.625Z" fill="#F4F4F4"/>
        <path d="M41.1804 8.81679C41.0205 8.75047 40.8446 8.73305 40.6748 8.76673C40.505 8.80041 40.3491 8.88368 40.2266 9.00601L37.3304 11.9034C35.7199 10.364 33.6929 9.3315 31.5009 8.93389C29.3089 8.53627 27.0484 8.79109 24.9999 9.6667C22.9513 10.5423 21.2051 12.0002 19.9777 13.8594C18.7503 15.7186 18.0959 17.8973 18.0957 20.1251C18.0957 20.3571 18.1879 20.5797 18.352 20.7438C18.5161 20.9079 18.7386 21.0001 18.9707 21.0001C19.2028 21.0001 19.4253 20.9079 19.5894 20.7438C19.7535 20.5797 19.8457 20.3571 19.8457 20.1251C19.8465 18.2438 20.3985 16.404 21.4337 14.8331C22.4688 13.2622 23.9416 12.0291 25.67 11.2862C27.3984 10.5433 29.3066 10.3232 31.1587 10.6532C33.0108 10.9831 34.7256 11.8486 36.0912 13.1426L33.2266 16.006C33.1041 16.1284 33.0207 16.2844 32.9869 16.4542C32.953 16.624 32.9704 16.8 33.0367 16.96C33.1029 17.12 33.2152 17.2567 33.3592 17.3528C33.5032 17.449 33.6725 17.5002 33.8457 17.5001H40.8457C41.0778 17.5001 41.3003 17.4079 41.4644 17.2438C41.6285 17.0797 41.7207 16.8571 41.7207 16.6251V9.62507C41.7207 9.45202 41.6693 9.28286 41.5731 9.13898C41.477 8.99511 41.3403 8.88299 41.1804 8.81679ZM39.9707 15.7501H35.9577L39.9707 11.7371V15.7501Z" fill="#F4F4F4"/>
        <path opacity="0.2" d="M33.75 21.9624V43.2124C33.75 43.5439 33.6183 43.8619 33.3839 44.0963C33.1495 44.3307 32.8315 44.4624 32.5 44.4624H7.5C7.16848 44.4624 6.85054 44.3307 6.61612 44.0963C6.3817 43.8619 6.25 43.5439 6.25 43.2124V21.9624H33.75Z" fill="#F4F4F4"/>
        <path d="M34.8688 21.403L32.3688 16.403C32.2648 16.1954 32.1051 16.0207 31.9075 15.8987C31.7099 15.7768 31.4822 15.7122 31.25 15.7124H8.75C8.51778 15.7122 8.2901 15.7768 8.09249 15.8987C7.89489 16.0207 7.73517 16.1954 7.63125 16.403L5.13125 21.403C5.04509 21.5769 5.00018 21.7683 5 21.9624V43.2124C5 43.8754 5.26339 44.5113 5.73223 44.9802C6.20107 45.449 6.83696 45.7124 7.5 45.7124H32.5C33.163 45.7124 33.7989 45.449 34.2678 44.9802C34.7366 44.5113 35 43.8754 35 43.2124V21.9624C34.9998 21.7683 34.9549 21.5769 34.8688 21.403ZM9.52187 18.2124H30.4781L31.7281 20.7124H8.27187L9.52187 18.2124ZM32.5 43.2124H7.5V23.2124H32.5V43.2124Z" fill="#F4F4F4"/>
        <path opacity="0.2" d="M25.2759 31.6968V35.4468H15.9009V31.6968H25.2759Z" fill="#F4F4F4"/>
        <path d="M16.3696 31.6968V35.4468C16.3696 35.5711 16.3202 35.6903 16.2323 35.7782C16.1444 35.8661 16.0252 35.9155 15.9009 35.9155C15.7766 35.9155 15.6573 35.8661 15.5694 35.7782C15.4815 35.6903 15.4321 35.5711 15.4321 35.4468V31.6968C15.4321 31.5725 15.4815 31.4532 15.5694 31.3653C15.6573 31.2774 15.7766 31.228 15.9009 31.228C16.0252 31.228 16.1444 31.2774 16.2323 31.3653C16.3202 31.4532 16.3696 31.5725 16.3696 31.6968ZM18.2446 27.478C18.1203 27.478 18.0011 27.5274 17.9132 27.6153C17.8253 27.7032 17.7759 27.8225 17.7759 27.9468V39.1968C17.7759 39.3211 17.8253 39.4403 17.9132 39.5282C18.0011 39.6161 18.1203 39.6655 18.2446 39.6655C18.3689 39.6655 18.4882 39.6161 18.5761 39.5282C18.664 39.4403 18.7134 39.3211 18.7134 39.1968V27.9468C18.7134 27.8225 18.664 27.7032 18.5761 27.6153C18.4882 27.5274 18.3689 27.478 18.2446 27.478ZM20.5884 29.353C20.4641 29.353 20.3448 29.4024 20.2569 29.4903C20.169 29.5782 20.1196 29.6975 20.1196 29.8218V37.3218C20.1196 37.4461 20.169 37.5653 20.2569 37.6532C20.3448 37.7411 20.4641 37.7905 20.5884 37.7905C20.7127 37.7905 20.8319 37.7411 20.9198 37.6532C21.0077 37.5653 21.0571 37.4461 21.0571 37.3218V29.8218C21.0571 29.6975 21.0077 29.5782 20.9198 29.4903C20.8319 29.4024 20.7127 29.353 20.5884 29.353ZM22.9321 31.228C22.8078 31.228 22.6886 31.2774 22.6007 31.3653C22.5128 31.4532 22.4634 31.5725 22.4634 31.6968V35.4468C22.4634 35.5711 22.5128 35.6903 22.6007 35.7782C22.6886 35.8661 22.8078 35.9155 22.9321 35.9155C23.0564 35.9155 23.1757 35.8661 23.2636 35.7782C23.3515 35.6903 23.4009 35.5711 23.4009 35.4468V31.6968C23.4009 31.5725 23.3515 31.4532 23.2636 31.3653C23.1757 31.2774 23.0564 31.228 22.9321 31.228ZM25.2759 30.2905C25.1516 30.2905 25.0323 30.3399 24.9444 30.4278C24.8565 30.5157 24.8071 30.635 24.8071 30.7593V36.3843C24.8071 36.5086 24.8565 36.6278 24.9444 36.7157C25.0323 36.8036 25.1516 36.853 25.2759 36.853C25.4002 36.853 25.5194 36.8036 25.6073 36.7157C25.6952 36.6278 25.7446 36.5086 25.7446 36.3843V30.7593C25.7446 30.635 25.6952 30.5157 25.6073 30.4278C25.5194 30.3399 25.4002 30.2905 25.2759 30.2905Z" fill="#F4F4F4"/>
        </svg>
        </div>
        <p className='text-sm sm:text-base'>Music Extraction</p>
        </button>
        <button onClick={()=>{setselected(5);navigate("/folders")}} className={`flex scale-[90%] sm:scale-100 px-3 py-1 sm:py-2  flex-col sm:flex-row  border-b-4  border-l-0 sm:border-b-0 sm:border-l-4 items-center ${selected===5 ? "text-[#baef57] transition ease-in-out delay-100  border-[#baef57]" : " border-[#1e1e1e]"}`} >
        <VscFolderOpened  className='mx-2' size={33}/>
        <p className='text-sm sm:text-base'>Folders</p>
        </button>
      </div>
    </div>
  )
}

export default Home
