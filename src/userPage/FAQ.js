import React,{useState} from 'react'
import {AiFillCloseCircle} from "react-icons/ai";
import {MdOutlineAddCircle} from "react-icons/md";
const FAQ = () => {
    const [questions, setquestions] = useState(['What is Decrackle?','How does Decrackle work?','Who can benefit from Decrackle?','What languages does Decrackle support?','How do I get started with Decrackle','Is my data safe with Decrackle?','How can I contact Decrackle support?'])
    const [answers, setanswers] = useState(['Decrackle is an advanced AI-powered audio enhancement platform that revolutionizes the way you experience audio. Our cutting-edge technology uses artificial intelligence to improve the quality of audio recordings, removing background noise, enhancing speech clarity, and providing seamless transcription services.','Decrackle utilizes powerful AI algorithms to analyze audio recordings and identify background noise, unwanted sounds, and imperfections. Our technology then processes the audio in real-time, removing noise and enhancing speech quality. The result is crystal-clear audio that sounds as if it was recorded in a professional studio.',"Decrackle is designed for a wide range of users, including content creators, podcasters, vloggers, video editors, call centers, and anyone looking to improve the quality of their audio recordings. Whether you're an individual creator or part of a business, Decrackle can help you achieve high-quality audio without the need for expensive equipment or post-production editing.","Decrackle currently supports English and Hindi languages for both audio enhancement and transcription services. We are actively working to expand our language support to cater to a broader audience.","Getting started with Decrackle is easy. Create an account on our website, choose the appropriate subscription plan, and start uploading your audio or video files. Our user-friendly platform will guide you through the process, and you'll be amazed at the difference Decrackle can make in your audio quality.","Absolutely. We take data security and privacy seriously. Your uploaded files are processed using AI algorithms, and we do not share or store your files after processing. For more information, please refer to our Privacy Policy.","If you have any questions, concerns, or need assistance, our support team is here to help. You can reach us through the Contact Us page on our website or send us an email at support@decrackle.com.\nFeel free to reach out to us if you have any other inquiries or if there's anything else we can assist you with!"]);
    const [value, setvalue] = useState(-1);
  return (
    <div className='w-full max-h-full mt-4 overflow-y-auto flex text-3xl items-center flex-col'>
        <p>FAQs</p>
        <div className='flex w-full justify-center h-full'>
            <div className='flex overflow-auto text-xl flex-col w-5/6 mt-6 font-light '>
                <div className='border-t-[1px] w-full border-white border-opacity-50'>
                </div>
                {questions.map((ques,key)=>{
                    return(
                        <div className='border-b-[1px] relative justify-start p-4 flex min-h-[83px] w-full border-white border-opacity-50'>
                            <div className='w-1/2'>{ques}</div>
                            { value !== -1 ? 
                            <button onClick={()=>{
                                if(value === key){
                                    setvalue(-1);
                                } else{
                                    setvalue(key);
                                }
                            }} className='absolute right-3'>
                            {value === key ? 
                            <AiFillCloseCircle size={30}/>
                            :
                            <MdOutlineAddCircle size={30}/>
                            }
                            </button>
                            :
                            <button onClick={()=>{setvalue(key)}} className='absolute right-3'>
                                <MdOutlineAddCircle size={30}/>
                            </button>
                            }
                            {key === value && 
                            <div className='w-1/2 transition ease-in-out delay-100 text-base px-4 mr-2'>
                                {answers[key]}
                            </div>
                            }
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default FAQ