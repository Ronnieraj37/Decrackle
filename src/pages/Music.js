import React, { useEffect,useState } from 'react'
import {BsDot} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import FolderSelect from '../cards/FolderSelect';
const Music = ({setfile,setselected,file}) => {
    const navigate = useNavigate();
    const [musicPlay, setmusicPlay] = useState(false);
    const [vocalPlay, setvocalPlay] = useState(false);
    const [musicExtract, setmusicExtract] = useState(false);
    const [downloadModal, setdownloadModal] = useState(false);
    const playMusic=()=>{
      setvocalPlay(false);
      setmusicPlay(!musicPlay);
    }
    const playVocal=()=>{
      setmusicPlay(false);
      setvocalPlay(!vocalPlay);
    }
    useEffect(()=>{
        setselected(4);
    })
  return (
    <div className='flex flex-col h-[90%] items-center justify-center'>
        {musicExtract ?
          <div className='h-full flex items-center justify-center flex-col w-full'>
            {downloadModal ? 
            <FolderSelect setdownloadModal={setdownloadModal}/>
            :
            <div className='h-full flex items-center justify-center flex-col w-full'>
            <div className='flex my-2 h-[10%] items-center w-[90%] sm:w-[78%] justify-between'>
            <p className='text-xl sm:text-2xl md:text-3xl  text-[#baef57]'>File Name</p>
            <p className='font-extralight'>Last Edit 2023-07-16 06:25 PM </p>
            </div>
            <div className=' flex flex-col w-[85%] sm:w-[80%] h-[55%]  items-center justify-center  border-white border-dashed border-[1px] rounded-3xl '>
              <div className='w-[80%] lg:scale-100 scale-90 lg:mt-0 h-[90%] flex flex-col items-center justify-around '>
              <p className='font-extralight'>Audio Enhancement Completed!</p>
              <div className=''>
              <svg width="44" height="53" viewBox="0 0 44 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.415 14.785L29.415 0.784952C29.2291 0.599283 29.0085 0.452055 28.7657 0.351679C28.5229 0.251303 28.2627 0.199745 28 0.199952H4C2.93913 0.199952 1.92172 0.621379 1.17157 1.37152C0.421427 2.12167 0 3.13909 0 4.19995V48.2C0 49.2608 0.421427 50.2782 1.17157 51.0284C1.92172 51.7785 2.93913 52.2 4 52.2H40C41.0609 52.2 42.0783 51.7785 42.8284 51.0284C43.5786 50.2782 44 49.2608 44 48.2V16.2C44.0002 15.9372 43.9487 15.677 43.8483 15.4343C43.7479 15.1915 43.6007 14.9708 43.415 14.785ZM30 7.02745L37.1725 14.2H30V7.02745ZM40 48.2H4V4.19995H26V16.2C26 16.7304 26.2107 17.2391 26.5858 17.6142C26.9609 17.9892 27.4696 18.2 28 18.2H40V48.2ZM29.415 32.785C29.601 32.9707 29.7485 33.1913 29.8491 33.4341C29.9498 33.6769 30.0016 33.9371 30.0016 34.2C30.0016 34.4628 29.9498 34.723 29.8491 34.9658C29.7485 35.2086 29.601 35.4292 29.415 35.615L23.415 41.615C23.2293 41.8009 23.0087 41.9484 22.7659 42.0491C22.5231 42.1497 22.2628 42.2015 22 42.2015C21.7372 42.2015 21.4769 42.1497 21.2341 42.0491C20.9913 41.9484 20.7707 41.8009 20.585 41.615L14.585 35.615C14.2097 35.2397 13.9989 34.7307 13.9989 34.2C13.9989 33.6692 14.2097 33.1602 14.585 32.785C14.9603 32.4097 15.4693 32.1988 16 32.1988C16.5307 32.1988 17.0397 32.4097 17.415 32.785L20 35.3725V24.2C20 23.6695 20.2107 23.1608 20.5858 22.7857C20.9609 22.4107 21.4696 22.2 22 22.2C22.5304 22.2 23.0391 22.4107 23.4142 22.7857C23.7893 23.1608 24 23.6695 24 24.2V35.3725L26.585 32.785C26.7707 32.599 26.9913 32.4515 27.2341 32.3508C27.4769 32.2502 27.7372 32.1984 28 32.1984C28.2628 32.1984 28.5231 32.2502 28.7659 32.3508C29.0087 32.4515 29.2293 32.599 29.415 32.785Z" fill="#F4F4F4"/>
              </svg>
              </div>
              <div className='flex w-full font-light justify-around items-center text-2xl'>
                <button onClick={playMusic} className='flex'>
                <p className="mx-2 ">Music File</p>
                {musicPlay ? 
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 3.65625C15.1631 3.65625 12.3899 4.4975 10.031 6.07361C7.67223 7.64972 5.83375 9.88991 4.74811 12.5109C3.66246 15.1319 3.37841 18.0159 3.93187 20.7983C4.48532 23.5807 5.85143 26.1366 7.85744 28.1426C9.86345 30.1486 12.4193 31.5147 15.2017 32.0681C17.9841 32.6216 20.8681 32.3375 23.4891 31.2519C26.1101 30.1663 28.3503 28.3278 29.9264 25.969C31.5025 23.6101 32.3438 20.8369 32.3438 18C32.3393 14.1972 30.8266 10.5514 28.1376 7.86237C25.4486 5.17336 21.8028 3.66072 18 3.65625ZM18 30.6562C15.4968 30.6562 13.0499 29.914 10.9686 28.5233C8.88726 27.1326 7.26508 25.156 6.30716 22.8433C5.34923 20.5307 5.0986 17.986 5.58694 15.5309C6.07529 13.0758 7.28068 10.8207 9.05069 9.05068C10.8207 7.28067 13.0758 6.07528 15.5309 5.58694C17.986 5.09859 20.5307 5.34923 22.8433 6.30715C25.156 7.26507 27.1326 8.88725 28.5233 10.9686C29.914 13.0499 30.6563 15.4968 30.6563 18C30.6525 21.3555 29.3179 24.5725 26.9452 26.9452C24.5725 29.3179 21.3555 30.6525 18 30.6562ZM15.4688 13.5V22.5C15.4688 22.7238 15.3799 22.9384 15.2216 23.0966C15.0634 23.2549 14.8488 23.3438 14.625 23.3438C14.4012 23.3438 14.1866 23.2549 14.0284 23.0966C13.8702 22.9384 13.7813 22.7238 13.7813 22.5V13.5C13.7813 13.2762 13.8702 13.0616 14.0284 12.9034C14.1866 12.7451 14.4012 12.6562 14.625 12.6562C14.8488 12.6562 15.0634 12.7451 15.2216 12.9034C15.3799 13.0616 15.4688 13.2762 15.4688 13.5ZM22.2188 13.5V22.5C22.2188 22.7238 22.1299 22.9384 21.9716 23.0966C21.8134 23.2549 21.5988 23.3438 21.375 23.3438C21.1512 23.3438 20.9366 23.2549 20.7784 23.0966C20.6202 22.9384 20.5313 22.7238 20.5313 22.5V13.5C20.5313 13.2762 20.6202 13.0616 20.7784 12.9034C20.9366 12.7451 21.1512 12.6562 21.375 12.6562C21.5988 12.6562 21.8134 12.7451 21.9716 12.9034C22.1299 13.0616 22.2188 13.2762 22.2188 13.5Z" fill="#F4F4F4"/>
                </svg>
                :
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 3.65625C15.1631 3.65625 12.3899 4.4975 10.031 6.07361C7.67223 7.64972 5.83375 9.88991 4.74811 12.5109C3.66246 15.1319 3.37841 18.0159 3.93187 20.7983C4.48532 23.5807 5.85143 26.1366 7.85744 28.1426C9.86345 30.1486 12.4193 31.5147 15.2017 32.0681C17.9841 32.6216 20.8681 32.3375 23.4891 31.2519C26.1101 30.1663 28.3503 28.3278 29.9264 25.969C31.5025 23.6101 32.3438 20.8369 32.3438 18C32.3393 14.1972 30.8266 10.5514 28.1376 7.86237C25.4486 5.17336 21.8028 3.66072 18 3.65625ZM18 30.6562C15.4968 30.6562 13.0499 29.914 10.9686 28.5233C8.88726 27.1326 7.26508 25.156 6.30716 22.8433C5.34923 20.5307 5.0986 17.986 5.58694 15.5309C6.07529 13.0758 7.28068 10.8207 9.05069 9.05068C10.8207 7.28067 13.0758 6.07528 15.5309 5.58694C17.986 5.09859 20.5307 5.34923 22.8433 6.30715C25.156 7.26507 27.1326 8.88725 28.5233 10.9686C29.914 13.0499 30.6563 15.4968 30.6563 18C30.6525 21.3555 29.3179 24.5725 26.9452 26.9452C24.5725 29.3179 21.3555 30.6525 18 30.6562ZM22.9683 17.2969L16.2183 12.7969C16.0911 12.712 15.9433 12.6633 15.7907 12.656C15.638 12.6486 15.4862 12.6829 15.3515 12.7551C15.2167 12.8273 15.1042 12.9347 15.0257 13.0659C14.9473 13.1971 14.906 13.3471 14.9063 13.5V22.5C14.906 22.6529 14.9473 22.8029 15.0257 22.9341C15.1042 23.0653 15.2167 23.1727 15.3515 23.2449C15.4862 23.3171 15.638 23.3514 15.7907 23.344C15.9433 23.3367 16.0911 23.288 16.2183 23.2031L22.9683 18.7031C23.0843 18.6262 23.1795 18.5217 23.2453 18.399C23.3112 18.2763 23.3456 18.1392 23.3456 18C23.3456 17.8608 23.3112 17.7237 23.2453 17.601C23.1795 17.4783 23.0843 17.3738 22.9683 17.2969ZM16.5938 20.9236V15.0764L20.9784 18L16.5938 20.9236Z" fill="#F4F4F4"/>
                </svg>
                }
                </button>
                <button onClick={playVocal} className='flex'>
                <p className="mx-2 ">Vocal File</p>
                {vocalPlay ? 
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 3.65625C15.1631 3.65625 12.3899 4.4975 10.031 6.07361C7.67223 7.64972 5.83375 9.88991 4.74811 12.5109C3.66246 15.1319 3.37841 18.0159 3.93187 20.7983C4.48532 23.5807 5.85143 26.1366 7.85744 28.1426C9.86345 30.1486 12.4193 31.5147 15.2017 32.0681C17.9841 32.6216 20.8681 32.3375 23.4891 31.2519C26.1101 30.1663 28.3503 28.3278 29.9264 25.969C31.5025 23.6101 32.3438 20.8369 32.3438 18C32.3393 14.1972 30.8266 10.5514 28.1376 7.86237C25.4486 5.17336 21.8028 3.66072 18 3.65625ZM18 30.6562C15.4968 30.6562 13.0499 29.914 10.9686 28.5233C8.88726 27.1326 7.26508 25.156 6.30716 22.8433C5.34923 20.5307 5.0986 17.986 5.58694 15.5309C6.07529 13.0758 7.28068 10.8207 9.05069 9.05068C10.8207 7.28067 13.0758 6.07528 15.5309 5.58694C17.986 5.09859 20.5307 5.34923 22.8433 6.30715C25.156 7.26507 27.1326 8.88725 28.5233 10.9686C29.914 13.0499 30.6563 15.4968 30.6563 18C30.6525 21.3555 29.3179 24.5725 26.9452 26.9452C24.5725 29.3179 21.3555 30.6525 18 30.6562ZM15.4688 13.5V22.5C15.4688 22.7238 15.3799 22.9384 15.2216 23.0966C15.0634 23.2549 14.8488 23.3438 14.625 23.3438C14.4012 23.3438 14.1866 23.2549 14.0284 23.0966C13.8702 22.9384 13.7813 22.7238 13.7813 22.5V13.5C13.7813 13.2762 13.8702 13.0616 14.0284 12.9034C14.1866 12.7451 14.4012 12.6562 14.625 12.6562C14.8488 12.6562 15.0634 12.7451 15.2216 12.9034C15.3799 13.0616 15.4688 13.2762 15.4688 13.5ZM22.2188 13.5V22.5C22.2188 22.7238 22.1299 22.9384 21.9716 23.0966C21.8134 23.2549 21.5988 23.3438 21.375 23.3438C21.1512 23.3438 20.9366 23.2549 20.7784 23.0966C20.6202 22.9384 20.5313 22.7238 20.5313 22.5V13.5C20.5313 13.2762 20.6202 13.0616 20.7784 12.9034C20.9366 12.7451 21.1512 12.6562 21.375 12.6562C21.5988 12.6562 21.8134 12.7451 21.9716 12.9034C22.1299 13.0616 22.2188 13.2762 22.2188 13.5Z" fill="#F4F4F4"/>
                </svg>
                :
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 3.65625C15.1631 3.65625 12.3899 4.4975 10.031 6.07361C7.67223 7.64972 5.83375 9.88991 4.74811 12.5109C3.66246 15.1319 3.37841 18.0159 3.93187 20.7983C4.48532 23.5807 5.85143 26.1366 7.85744 28.1426C9.86345 30.1486 12.4193 31.5147 15.2017 32.0681C17.9841 32.6216 20.8681 32.3375 23.4891 31.2519C26.1101 30.1663 28.3503 28.3278 29.9264 25.969C31.5025 23.6101 32.3438 20.8369 32.3438 18C32.3393 14.1972 30.8266 10.5514 28.1376 7.86237C25.4486 5.17336 21.8028 3.66072 18 3.65625ZM18 30.6562C15.4968 30.6562 13.0499 29.914 10.9686 28.5233C8.88726 27.1326 7.26508 25.156 6.30716 22.8433C5.34923 20.5307 5.0986 17.986 5.58694 15.5309C6.07529 13.0758 7.28068 10.8207 9.05069 9.05068C10.8207 7.28067 13.0758 6.07528 15.5309 5.58694C17.986 5.09859 20.5307 5.34923 22.8433 6.30715C25.156 7.26507 27.1326 8.88725 28.5233 10.9686C29.914 13.0499 30.6563 15.4968 30.6563 18C30.6525 21.3555 29.3179 24.5725 26.9452 26.9452C24.5725 29.3179 21.3555 30.6525 18 30.6562ZM22.9683 17.2969L16.2183 12.7969C16.0911 12.712 15.9433 12.6633 15.7907 12.656C15.638 12.6486 15.4862 12.6829 15.3515 12.7551C15.2167 12.8273 15.1042 12.9347 15.0257 13.0659C14.9473 13.1971 14.906 13.3471 14.9063 13.5V22.5C14.906 22.6529 14.9473 22.8029 15.0257 22.9341C15.1042 23.0653 15.2167 23.1727 15.3515 23.2449C15.4862 23.3171 15.638 23.3514 15.7907 23.344C15.9433 23.3367 16.0911 23.288 16.2183 23.2031L22.9683 18.7031C23.0843 18.6262 23.1795 18.5217 23.2453 18.399C23.3112 18.2763 23.3456 18.1392 23.3456 18C23.3456 17.8608 23.3112 17.7237 23.2453 17.601C23.1795 17.4783 23.0843 17.3738 22.9683 17.2969ZM16.5938 20.9236V15.0764L20.9784 18L16.5938 20.9236Z" fill="#F4F4F4"/>
                </svg>
                }
                </button>
              </div>
              <div className='flex items-center flex-col'>
              <button onClick={()=>{setdownloadModal(true)}} className='flex  px-12 py-2 mx-3 items-center text-black rounded-3xl bg-[#a3db3c]'>
                <p className=' mx-3 '>Download the File</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 10.6875V14.625C15.75 14.9234 15.6315 15.2095 15.4205 15.4205C15.2095 15.6315 14.9234 15.75 14.625 15.75H3.375C3.07663 15.75 2.79048 15.6315 2.5795 15.4205C2.36853 15.2095 2.25 14.9234 2.25 14.625V10.6875C2.25 10.5383 2.30926 10.3952 2.41475 10.2898C2.52024 10.1843 2.66332 10.125 2.8125 10.125C2.96168 10.125 3.10476 10.1843 3.21025 10.2898C3.31574 10.3952 3.375 10.5383 3.375 10.6875V14.625H14.625V10.6875C14.625 10.5383 14.6843 10.3952 14.7898 10.2898C14.8952 10.1843 15.0383 10.125 15.1875 10.125C15.3367 10.125 15.4798 10.1843 15.5852 10.2898C15.6907 10.3952 15.75 10.5383 15.75 10.6875ZM8.60203 11.0855C8.65427 11.1378 8.71631 11.1793 8.7846 11.2076C8.85288 11.2359 8.92608 11.2504 9 11.2504C9.07392 11.2504 9.14712 11.2359 9.2154 11.2076C9.28369 11.1793 9.34573 11.1378 9.39797 11.0855L12.2105 8.27297C12.2627 8.22071 12.3042 8.15866 12.3325 8.09038C12.3608 8.0221 12.3753 7.94891 12.3753 7.875C12.3753 7.80109 12.3608 7.7279 12.3325 7.65962C12.3042 7.59134 12.2627 7.52929 12.2105 7.47703C12.1582 7.42477 12.0962 7.38331 12.0279 7.35503C11.9596 7.32674 11.8864 7.31219 11.8125 7.31219C11.7386 7.31219 11.6654 7.32674 11.5971 7.35503C11.5288 7.38331 11.4668 7.42477 11.4145 7.47703L9.5625 9.32977V2.8125C9.5625 2.66332 9.50324 2.52024 9.39775 2.41475C9.29226 2.30926 9.14918 2.25 9 2.25C8.85082 2.25 8.70774 2.30926 8.60225 2.41475C8.49676 2.52024 8.4375 2.66332 8.4375 2.8125V9.32977L6.58547 7.47703C6.47992 7.37148 6.33677 7.31219 6.1875 7.31219C6.03823 7.31219 5.89508 7.37148 5.78953 7.47703C5.68398 7.58258 5.62469 7.72573 5.62469 7.875C5.62469 8.02427 5.68398 8.16742 5.78953 8.27297L8.60203 11.0855Z" fill="#111111"/>
                </svg>
              </button>
              <button className='font-light mt-1 underline  underline-offset-2'>Give Feedback</button>
              </div>
              </div>
            </div>
            <div className='w-[80%] h-[35%] flex flex-col items-center justify-center sm:items-start rounded-3xl  sm:justify-start'>
              <div className='mt-12 flex lg:flex-col flex-row'>
              <div className='flex flex-col lg:flex-row my-1'>
              <div className='flex mx-2'>Type:  <p className='font-semibold mx-2'> Audio </p> </div>
              <div className='flex mx-2'>Codec:  <p className='font-semibold mx-2'> mp3/wav </p> </div>
              <div className='flex mx-2'>Duration:  <p className='font-semibold mx-2'> 54 sec </p> </div>
              <div className='flex mx-2'>Bit rate:  <p className='font-semibold mx-2'> 24kb/sec </p> </div>
              </div>
              <div className='flex flex-col lg:flex-row my-1'>
              <div className='flex mx-2'>Type:  <p className='font-semibold mx-2'> Audio </p> </div>
              <div className='flex mx-2'>Codec:  <p className='font-semibold mx-2'> mp3/wav </p> </div>
              <div className='flex mx-2'>Duration:  <p className='font-semibold mx-2'> 54 sec </p> </div>
              <div className='flex mx-2'>Bit rate:  <p className='font-semibold mx-2'> 24kb/sec </p> </div>
              <div className='flex mx-2'>Resolution:  <p className='font-semibold mx-2'> 1920*1080 </p> </div>
              </div>
              </div>
            </div>
            </div>
            }
          </div>
         :
            <div className='h-[60%] w-4/5 sm:w-3/5 border-white border-dashed border-[1px] rounded-3xl'>
                <div className='h-full w-full flex items-center justify-around  rounded-2xl '>
                    <div className='h-2/3 flex flex-col items-center justify-around '>
                    <p>File Uploaded !</p>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.765 32.1525C24.3996 32.0009 23.9974 31.9611 23.6094 32.0381C23.2214 32.115 22.8649 32.3054 22.585 32.585L17.1725 38H12C11.4696 38 10.9609 38.2107 10.5858 38.5858C10.2107 38.9609 10 39.4696 10 40V50C10 50.5304 10.2107 51.0391 10.5858 51.4142C10.9609 51.7893 11.4696 52 12 52H17.1725L22.585 57.415C22.8647 57.695 23.2212 57.8858 23.6094 57.9631C23.9976 58.0404 24.3999 58.0007 24.7656 57.8492C25.1312 57.6977 25.4437 57.4412 25.6634 57.112C25.8832 56.7828 26.0003 56.3958 26 56V34C25.9999 33.6044 25.8825 33.2178 25.6627 32.8889C25.4429 32.5601 25.1305 32.3038 24.765 32.1525ZM22 51.1725L19.415 48.585C19.2291 48.3993 19.0085 48.2521 18.7657 48.1517C18.5229 48.0513 18.2627 47.9998 18 48H14V42H18C18.2627 42.0002 18.5229 41.9487 18.7657 41.8483C19.0085 41.7479 19.2291 41.6007 19.415 41.415L22 38.8275V51.1725ZM38 45C37.9979 46.764 37.5356 48.497 36.6587 50.0276C35.7818 51.5582 34.5207 52.8335 33 53.7275C32.5446 53.9542 32.0199 53.9989 31.5328 53.8525C31.0456 53.706 30.6325 53.3794 30.3777 52.9391C30.1228 52.4988 30.0453 51.978 30.1609 51.4826C30.2765 50.9872 30.5766 50.5545 31 50.2725C31.9169 49.7313 32.6768 48.9603 33.2047 48.0357C33.7326 47.111 34.0103 46.0647 34.0103 45C34.0103 43.9353 33.7326 42.889 33.2047 41.9643C32.6768 41.0397 31.9169 40.2687 31 39.7275C30.5766 39.4455 30.2765 39.0128 30.1609 38.5174C30.0453 38.022 30.1228 37.5012 30.3777 37.0609C30.6325 36.6206 31.0456 36.294 31.5328 36.1475C32.0199 36.0011 32.5446 36.0458 33 36.2725C34.5207 37.1665 35.7818 38.4418 36.6587 39.9724C37.5356 41.503 37.9979 43.236 38 45ZM53.415 20.585L39.415 6.585C39.2291 6.39933 39.0085 6.2521 38.7657 6.15173C38.5229 6.05135 38.2627 5.99979 38 6H14C12.9391 6 11.9217 6.42143 11.1716 7.17157C10.4214 7.92172 10 8.93913 10 10V30C10 30.5304 10.2107 31.0391 10.5858 31.4142C10.9609 31.7893 11.4696 32 12 32C12.5304 32 13.0391 31.7893 13.4142 31.4142C13.7893 31.0391 14 30.5304 14 30V10H36V22C36 22.5304 36.2107 23.0391 36.5858 23.4142C36.9609 23.7893 37.4696 24 38 24H50V54H42C41.4696 54 40.9609 54.2107 40.5858 54.5858C40.2107 54.9609 40 55.4696 40 56C40 56.5304 40.2107 57.0391 40.5858 57.4142C40.9609 57.7893 41.4696 58 42 58H50C51.0609 58 52.0783 57.5786 52.8284 56.8284C53.5786 56.0783 54 55.0609 54 54V22C54.0002 21.7373 53.9487 21.4771 53.8483 21.2343C53.7479 20.9915 53.6007 20.7709 53.415 20.585ZM40 12.8275L47.1725 20H40V12.8275Z" fill="#F4F4F4"/>
                    </svg>
                    <div className='flex flex-col items-center'>
                    <button onClick={()=>{setmusicExtract(true)}} className='flex sm:px-12 px-6 md:px-24 py-2 items-center rounded-3xl bg-[#a3db3c]'>
                        {/*Add gradient to button*/}
                        <p className='my-1 mx-1 text-black '>Extract Music </p>
                        <svg width="17" className='mx-1' height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.25 0.375H1.75C1.45163 0.375 1.16548 0.493526 0.954505 0.704505C0.743526 0.915483 0.625 1.20163 0.625 1.5V10.5C0.625 10.7984 0.743526 11.0845 0.954505 11.2955C1.16548 11.5065 1.45163 11.625 1.75 11.625H15.25C15.5484 11.625 15.8345 11.5065 16.0455 11.2955C16.2565 11.0845 16.375 10.7984 16.375 10.5V1.5C16.375 1.20163 16.2565 0.915483 16.0455 0.704505C15.8345 0.493526 15.5484 0.375 15.25 0.375ZM15.25 10.5H1.75V1.5H15.25V10.5ZM2.875 6.5625C2.875 6.41332 2.93426 6.27024 3.03975 6.16475C3.14524 6.05926 3.28832 6 3.4375 6H4.5625C4.71168 6 4.85476 6.05926 4.96025 6.16475C5.06574 6.27024 5.125 6.41332 5.125 6.5625C5.125 6.71168 5.06574 6.85476 4.96025 6.96025C4.85476 7.06574 4.71168 7.125 4.5625 7.125H3.4375C3.28832 7.125 3.14524 7.06574 3.03975 6.96025C2.93426 6.85476 2.875 6.71168 2.875 6.5625ZM14.125 6.5625C14.125 6.71168 14.0657 6.85476 13.9602 6.96025C13.8548 7.06574 13.7117 7.125 13.5625 7.125H6.8125C6.66332 7.125 6.52024 7.06574 6.41475 6.96025C6.30926 6.85476 6.25 6.71168 6.25 6.5625C6.25 6.41332 6.30926 6.27024 6.41475 6.16475C6.52024 6.05926 6.66332 6 6.8125 6H13.5625C13.7117 6 13.8548 6.05926 13.9602 6.16475C14.0657 6.27024 14.125 6.41332 14.125 6.5625ZM10.75 8.8125C10.75 8.96168 10.6907 9.10476 10.5852 9.21025C10.4798 9.31574 10.3367 9.375 10.1875 9.375H3.4375C3.28832 9.375 3.14524 9.31574 3.03975 9.21025C2.93426 9.10476 2.875 8.96168 2.875 8.8125C2.875 8.66332 2.93426 8.52024 3.03975 8.41475C3.14524 8.30926 3.28832 8.25 3.4375 8.25H10.1875C10.3367 8.25 10.4798 8.30926 10.5852 8.41475C10.6907 8.52024 10.75 8.66332 10.75 8.8125ZM14.125 8.8125C14.125 8.96168 14.0657 9.10476 13.9602 9.21025C13.8548 9.31574 13.7117 9.375 13.5625 9.375H12.4375C12.2883 9.375 12.1452 9.31574 12.0398 9.21025C11.9343 9.10476 11.875 8.96168 11.875 8.8125C11.875 8.66332 11.9343 8.52024 12.0398 8.41475C12.1452 8.30926 12.2883 8.25 12.4375 8.25H13.5625C13.7117 8.25 13.8548 8.30926 13.9602 8.41475C14.0657 8.52024 14.125 8.66332 14.125 8.8125Z" fill="#111111"/>
                        </svg>
                    </button>
                    <button onClick={()=>{setfile(null);navigate("/")}} className='my-1 font-light underline  underline-offset-2 '>Replace</button>
                    </div>
                    <div className='flex items-center'>
                    <BsDot size={25}/>
                    <p> Audio and Video file only</p>
                    </div>
                    </div>
                </div>
            </div>
         }
    </div>
  )
}

export default Music