import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { BiEnvelopeOpen, BiSend } from 'react-icons/bi'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { useApp } from '../contexts/AppContext';

const Contact: React.FC = () => {
	const { themeClass } =  useApp()
  const [data, setData] = useState({
    name: '', email: '', title: '', message: ''
  })
  const inputProps = {
    step: 300,
  };

  return (
    <div className={`flex flex-col mt-4 tablet:w-4/5 mx-auto ${themeClass.bg}`}>
      <h1 className='text-center text-2xl font-bold'>Contact Me</h1>
      <div className="grid laptop:grid-cols-3 mx-auto w-full md:grid-cols-2 mt-4 flex-wrap">
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <BiEnvelopeOpen className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="mailto:ndungutsecharles103@gmail.com">ndungutsecharles103@gmail.com</a></p>
        </div>
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <FaLinkedin className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/">Ishimwe Ndungutse Charles</a></p>
        </div>
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <FaPhoneAlt className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="tel:+250790077264">+250 790077264</a></p>
        </div>
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <FaInstagramSquare className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="https://www.instagram.com/ndungutse_charles/">ndungutse_charles</a></p>
        </div>
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <FaGithubSquare className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="https://github.com/NdungutseCharles103" className=''>ndungutsecharles103@gmail.com</a></p>
        </div>
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <FaFacebookSquare className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="https://www.facebook.com/ishimwendungutsecharles">NdungutseCharles103</a></p>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[700px]  mx-auto items-center">
      {/* <TextField id="outlined" type="text" label="Your Name" /> */}
      <div className='flex w-full mx-auto tablet:flex-row flex-col'>
         <div className='relative duration-500 flex flex-col-reverse px-2 py-1 justify-end'>
           <input value={data.name} onChange={(e)=> setData({...data, name: e.target.value})}
            type="text" className='
             outline-none z-[1] bg-transparent border-[1px] rounded-[0.3em] border-blue-600 min-w-[200px] py-1 px-2' />
           <label htmlFor="" className={``}>Your Name:</label>
         </div>
         <div className='relative duration-500 flex flex-col-reverse px-2 py-1 justify-end'>
           <input value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}
            type="text" className='
             outline-none z-[1] bg-transparent border-[1px] rounded-[0.3em] border-blue-600 min-w-[200px] py-1 px-2' />
           <label htmlFor="" className={``}>Your Email:</label>
         </div>
        </div>
        {/* <div className='flex w-full mx-auto'> */}
          <div className='relative w-full duration-500 flex flex-col-reverse px-2 py-1 justify-end'>
            <input value={data.title} onChange={(e)=> setData({...data, title: e.target.value})}
             type="text" className=' w-full
              outline-none z-[1] bg-transparent border-[1px] rounded-[0.3em] border-blue-600 min-w-[200px] py-1 px-2' />
            <label htmlFor="" className={``}>Title:</label>
          </div>
          <div className='relative w-full duration-500 flex flex-col-reverse px-2 py-1 justify-end'>
            <textarea value={data.message} onChange={(e)=> setData({...data, message: e.target.value})}
             className=' w-full
              outline-none z-[1] bg-transparent border-[1px] rounded-[0.3em] border-blue-600 min-w-[200px] py-1 px-2' />
            <label htmlFor="" className={``}>Message:</label>
          </div>
          <div className='w-full px-3'>
          <button className='flex my-2 items-center bg-blue-800 text-white px-3 py-1'>
            Send Message <BiSend className='ml-2' /></button>
            </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Contact