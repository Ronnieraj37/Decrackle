import React, { useEffect,useRef,useState } from 'react'
import FolderCard from '../cards/FolderCard';
import { useNavigate } from 'react-router-dom';
import FileCard from '../cards/FileCard';

const Upload = ({setmodal,setfile}) => {
    const navigate = useNavigate();
    const [isClicked, setisClicked] = useState(false);
    const [outside, setoutside] = useState(false);
    const [FileModal, setFileModal] = useState(false);
    const [folderModal, setfolderModal] = useState(false);
    const [files, setfiles] = useState(["file1","file2","file3","file4","file5","file6","file7"]);
    const hiddenFileInput = useRef(null);
    const [folders, setfolders] = useState(['folder name 1','folder name 2','folder name 3','fodler name 4','folder name 5','folder name 6'])
    const exitModal=()=>{
        setmodal(false);
    }
    const retrieveFile=(e)=>{
        const data = e.target.files[0];
        console.log("Data",data);
        setfile(e.target.files[0]);
        //file in state can be used
        setmodal(false);
        e.preventDefault();
        navigate("/speech");
    }
    const localFolder = () => {
        hiddenFileInput.current.click();
    }
    const openFolder=()=>{
        //api get folder
        setfolderModal(!folderModal);
    }
    const openFiles=(i)=>{
        //get files of folders && setfiles()
        setFileModal(true);
    }
    const goBack=()=>{
        if(FileModal){
            setFileModal(false);
        } else{
            setfolderModal(!folderModal)
        }
    }
    const setFile=()=>{
        //Get and set the file 
        setmodal(false);
        navigate("/speech");
    }
    useEffect(()=>{
        if(!isClicked && outside ){
            exitModal();
        }
        setisClicked(false);
        setoutside(false);
    },[outside])
  return (
    <div onClick={()=>{setoutside(true)}} className='fixed  bg-black  transition ease-in-out delay-300 -mt-5  row-full insect-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-1/6'>
        </div>
        {folderModal ? 
        <div onClick={()=>{setisClicked(true)}} className='w-1/2 h-2/6 transition ease-in-out delay-100 radius relative bg-black    borderTrans flex justify-center items-center rounded-2xl '>
            <button onClick={goBack} className='absolute text-xl p-4 top-4 left-4'>&larr; Back</button>
            <button onClick={exitModal} className='absolute p-2 top-4 right-4'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7075 12.7075L17.4138 16L20.7075 19.2925C20.8004 19.3854 20.8741 19.4957 20.9244 19.6171C20.9747 19.7385 21.0006 19.8686 21.0006 20C21.0006 20.1314 20.9747 20.2615 20.9244 20.3829C20.8741 20.5043 20.8004 20.6146 20.7075 20.7075C20.6146 20.8004 20.5043 20.8741 20.3829 20.9244C20.2615 20.9747 20.1314 21.0006 20 21.0006C19.8686 21.0006 19.7385 20.9747 19.6171 20.9244C19.4957 20.8741 19.3854 20.8004 19.2925 20.7075L16 17.4137L12.7075 20.7075C12.6146 20.8004 12.5043 20.8741 12.3829 20.9244C12.2615 20.9747 12.1314 21.0006 12 21.0006C11.8686 21.0006 11.7385 20.9747 11.6171 20.9244C11.4957 20.8741 11.3854 20.8004 11.2925 20.7075C11.1996 20.6146 11.1259 20.5043 11.0756 20.3829C11.0253 20.2615 10.9994 20.1314 10.9994 20C10.9994 19.8686 11.0253 19.7385 11.0756 19.6171C11.1259 19.4957 11.1996 19.3854 11.2925 19.2925L14.5863 16L11.2925 12.7075C11.1049 12.5199 10.9994 12.2654 10.9994 12C10.9994 11.7346 11.1049 11.4801 11.2925 11.2925C11.4801 11.1049 11.7346 10.9994 12 10.9994C12.2654 10.9994 12.5199 11.1049 12.7075 11.2925L16 14.5863L19.2925 11.2925C19.3854 11.1996 19.4957 11.1259 19.6171 11.0756C19.7385 11.0253 19.8686 10.9994 20 10.9994C20.1314 10.9994 20.2615 11.0253 20.3829 11.0756C20.5043 11.1259 20.6146 11.1996 20.7075 11.2925C20.8004 11.3854 20.8741 11.4957 20.9244 11.6171C20.9747 11.7385 21.0006 11.8686 21.0006 12C21.0006 12.1314 20.9747 12.2615 20.9244 12.3829C20.8741 12.5043 20.8004 12.6146 20.7075 12.7075ZM29 16C29 18.5712 28.2376 21.0846 26.8091 23.2224C25.3807 25.3603 23.3503 27.0265 20.9749 28.0104C18.5995 28.9944 15.9856 29.2518 13.4638 28.7502C10.9421 28.2486 8.6257 27.0105 6.80762 25.1924C4.98953 23.3743 3.75141 21.0579 3.2498 18.5362C2.74819 16.0144 3.00563 13.4006 3.98957 11.0251C4.97351 8.64968 6.63975 6.61935 8.77759 5.1909C10.9154 3.76244 13.4288 3 16 3C19.4467 3.00364 22.7512 4.37445 25.1884 6.81163C27.6256 9.24882 28.9964 12.5533 29 16ZM27 16C27 13.8244 26.3549 11.6977 25.1462 9.88873C23.9375 8.07979 22.2195 6.66989 20.2095 5.83733C18.1995 5.00476 15.9878 4.78692 13.854 5.21136C11.7202 5.6358 9.76021 6.68345 8.22183 8.22183C6.68345 9.7602 5.63581 11.7202 5.21137 13.854C4.78693 15.9878 5.00477 18.1995 5.83733 20.2095C6.66989 22.2195 8.07979 23.9375 9.88873 25.1462C11.6977 26.3549 13.8244 27 16 27C18.9164 26.9967 21.7123 25.8367 23.7745 23.7745C25.8367 21.7123 26.9967 18.9164 27 16Z" fill="#F4F4F4"/>
            </svg>
            </button>
            <div className='h-4/6 w-4/5 flex flex-col items-center justify-around '>
            { FileModal ? 
                <p className='text-3xl absolute top-4 py-8'>Choose File</p>
            :
                <p className='text-3xl absolute top-4 py-8'>Choose Folder</p>
            }
            <div className='h-full w-full'>
            {
                FileModal ? 
                <button onClick={setFile} className='grid grid-cols-1 mt-5 h-full overflow-auto w-full'>
                    {
                        files.map((file,i)=>{
                            return(
                                <div>
                                    <FileCard file={file} />
                                </div>
                            )
                        })
                    }
                </button>
                :      
                <div className='grid grid-cols-2 mt-5 h-full overflow-auto w-full'>
                    {
                    folders.map((folder,i)=>{
                        return(
                            <button  onClick={()=>{openFiles(i)}} >
                                <FolderCard folder={folder} i={i} />
                            </button>
                        )
                    })
                    }
                </div>
            }
            
            </div>
            </div>
        </div>
        :
        <div onClick={()=>{setisClicked(true)}} className='w-1/2 h-2/6 radius relative bg-black    borderTrans flex justify-center items-center rounded-2xl '>
            <div className='h-3/5 flex flex-col items-center justify-around '>
            <p className='text-3xl '>Upload file from</p>
            <div>
            <div className='flex'>
                <button onClick={openFolder} className='scale-[80%] items-center flex flex-col  mx-4'>
                <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="160" height="120" rx="16" fill="#1E1E1E"/>
                <g filter="url(#filter0_di_1_495)">
                <path d="M91.8098 64.2136C91.8098 65.9483 90.7199 67.7522 88.4716 69.2054C86.2407 70.6473 83.0558 71.5953 79.4498 71.5953C75.8438 71.5953 72.6588 70.6473 70.4279 69.2054C68.1796 67.7522 67.0897 65.9483 67.0897 64.2136C67.0897 62.4789 68.1796 60.675 70.4279 59.2218C72.6588 57.7799 75.8438 56.8319 79.4498 56.8319C83.0558 56.8319 86.2407 57.7799 88.4716 59.2218C90.7199 60.675 91.8098 62.4789 91.8098 64.2136Z" stroke="#F4F4F4" stroke-width="3.43335"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M67.786 69.2612C67.1602 69.7548 66.5829 70.2874 66.0601 70.8542C66.6905 71.7899 67.4718 72.6514 68.3781 73.4182C67.7036 74.2885 67.4333 75.1395 67.4333 75.8719C67.4333 77.1184 68.2163 78.709 70.4433 80.1529C72.6368 81.575 75.8723 82.5669 79.6217 82.5669C83.3711 82.5669 86.6066 81.575 88.8002 80.1529C91.0272 78.709 91.8101 77.1184 91.8101 75.8719C91.8101 75.0692 91.4855 74.1239 90.6597 73.1669C91.5156 72.4007 92.2504 71.5467 92.8401 70.624C91.9492 69.7003 90.9108 68.8722 89.7531 68.1621C93.1129 70.0198 95.2434 72.7845 95.2434 75.8719C95.2434 81.4656 88.2494 86.0002 79.6217 86.0002C70.9941 86.0002 64 81.4656 64 75.8719C64 73.3455 65.4266 71.0353 67.786 69.2612ZM88.1976 71.226C85.9702 69.7733 83.0306 68.8336 79.5587 68.8336C75.5212 68.8336 72.2037 70.1043 69.8887 71.9749C70.0627 71.846 70.2474 71.7179 70.4433 71.5909C72.6368 70.1687 75.8723 69.1768 79.6217 69.1768C83.0414 69.1768 86.0336 70.0019 88.1976 71.226Z" fill="#F4F4F4"/>
                <path d="M91.8101 63.8701V34" stroke="#F4F4F4" stroke-width="3.43335" stroke-linejoin="round"/>
                </g>
                <defs>
                <filter id="filter0_di_1_495" x="62.5535" y="32.8639" width="34.1366" height="55.1612" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="0.578582"/>
                <feGaussianBlur stdDeviation="0.723228"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_495"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_495" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-1.13613"/>
                <feGaussianBlur stdDeviation="1.13613"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_495"/>
                </filter>
                </defs>
                </svg>
                <p>Folder</p>
                </button>
                <input 
                type="file"
                name="data"
                ref={hiddenFileInput}
                style={{ display: 'none' }}
                onChange={retrieveFile}
                />
                <button onClick={localFolder} className='scale-[80%] items-center flex flex-col mx-4'>
                    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="160" height="120" rx="16" fill="#1E1E1E"/>
                    <path d="M100 38H60C58.4087 38 56.8826 38.6321 55.7574 39.7574C54.6321 40.8826 54 42.4087 54 44V72C54 73.5913 54.6321 75.1174 55.7574 76.2426C56.8826 77.3679 58.4087 78 60 78H78V82H72C71.4696 82 70.9609 82.2107 70.5858 82.5858C70.2107 82.9609 70 83.4696 70 84C70 84.5304 70.2107 85.0391 70.5858 85.4142C70.9609 85.7893 71.4696 86 72 86H88C88.5304 86 89.0391 85.7893 89.4142 85.4142C89.7893 85.0391 90 84.5304 90 84C90 83.4696 89.7893 82.9609 89.4142 82.5858C89.0391 82.2107 88.5304 82 88 82H82V78H100C101.591 78 103.117 77.3679 104.243 76.2426C105.368 75.1174 106 73.5913 106 72V44C106 42.4087 105.368 40.8826 104.243 39.7574C103.117 38.6321 101.591 38 100 38ZM60 42H100C100.53 42 101.039 42.2107 101.414 42.5858C101.789 42.9609 102 43.4696 102 44V64H58V44C58 43.4696 58.2107 42.9609 58.5858 42.5858C58.9609 42.2107 59.4696 42 60 42ZM100 74H60C59.4696 74 58.9609 73.7893 58.5858 73.4142C58.2107 73.0391 58 72.5304 58 72V68H102V72C102 72.5304 101.789 73.0391 101.414 73.4142C101.039 73.7893 100.53 74 100 74Z" fill="#F4F4F4"/>
                    </svg>
                    <p>My Desktop</p>
                </button>
            </div>
            <button onClick={exitModal} className='absolute p-2 top-4 right-4'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7075 12.7075L17.4138 16L20.7075 19.2925C20.8004 19.3854 20.8741 19.4957 20.9244 19.6171C20.9747 19.7385 21.0006 19.8686 21.0006 20C21.0006 20.1314 20.9747 20.2615 20.9244 20.3829C20.8741 20.5043 20.8004 20.6146 20.7075 20.7075C20.6146 20.8004 20.5043 20.8741 20.3829 20.9244C20.2615 20.9747 20.1314 21.0006 20 21.0006C19.8686 21.0006 19.7385 20.9747 19.6171 20.9244C19.4957 20.8741 19.3854 20.8004 19.2925 20.7075L16 17.4137L12.7075 20.7075C12.6146 20.8004 12.5043 20.8741 12.3829 20.9244C12.2615 20.9747 12.1314 21.0006 12 21.0006C11.8686 21.0006 11.7385 20.9747 11.6171 20.9244C11.4957 20.8741 11.3854 20.8004 11.2925 20.7075C11.1996 20.6146 11.1259 20.5043 11.0756 20.3829C11.0253 20.2615 10.9994 20.1314 10.9994 20C10.9994 19.8686 11.0253 19.7385 11.0756 19.6171C11.1259 19.4957 11.1996 19.3854 11.2925 19.2925L14.5863 16L11.2925 12.7075C11.1049 12.5199 10.9994 12.2654 10.9994 12C10.9994 11.7346 11.1049 11.4801 11.2925 11.2925C11.4801 11.1049 11.7346 10.9994 12 10.9994C12.2654 10.9994 12.5199 11.1049 12.7075 11.2925L16 14.5863L19.2925 11.2925C19.3854 11.1996 19.4957 11.1259 19.6171 11.0756C19.7385 11.0253 19.8686 10.9994 20 10.9994C20.1314 10.9994 20.2615 11.0253 20.3829 11.0756C20.5043 11.1259 20.6146 11.1996 20.7075 11.2925C20.8004 11.3854 20.8741 11.4957 20.9244 11.6171C20.9747 11.7385 21.0006 11.8686 21.0006 12C21.0006 12.1314 20.9747 12.2615 20.9244 12.3829C20.8741 12.5043 20.8004 12.6146 20.7075 12.7075ZM29 16C29 18.5712 28.2376 21.0846 26.8091 23.2224C25.3807 25.3603 23.3503 27.0265 20.9749 28.0104C18.5995 28.9944 15.9856 29.2518 13.4638 28.7502C10.9421 28.2486 8.6257 27.0105 6.80762 25.1924C4.98953 23.3743 3.75141 21.0579 3.2498 18.5362C2.74819 16.0144 3.00563 13.4006 3.98957 11.0251C4.97351 8.64968 6.63975 6.61935 8.77759 5.1909C10.9154 3.76244 13.4288 3 16 3C19.4467 3.00364 22.7512 4.37445 25.1884 6.81163C27.6256 9.24882 28.9964 12.5533 29 16ZM27 16C27 13.8244 26.3549 11.6977 25.1462 9.88873C23.9375 8.07979 22.2195 6.66989 20.2095 5.83733C18.1995 5.00476 15.9878 4.78692 13.854 5.21136C11.7202 5.6358 9.76021 6.68345 8.22183 8.22183C6.68345 9.7602 5.63581 11.7202 5.21137 13.854C4.78693 15.9878 5.00477 18.1995 5.83733 20.2095C6.66989 22.2195 8.07979 23.9375 9.88873 25.1462C11.6977 26.3549 13.8244 27 16 27C18.9164 26.9967 21.7123 25.8367 23.7745 23.7745C25.8367 21.7123 26.9967 18.9164 27 16Z" fill="#F4F4F4"/>
            </svg>
            </button>
            </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Upload