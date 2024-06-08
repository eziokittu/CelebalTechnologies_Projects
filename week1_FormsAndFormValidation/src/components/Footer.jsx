import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 bg-[#1e0823] border-t border-pink-300 px-2 sm:px-4 py-2 w-full text-pink-100 flex flex-col justify-center items-center tracking-tighter text-center text-sm sm:text-base'>
      <div className='flex flex-wrap justify-center items-center gap-1'>
        <p>This is the Week 1 Assignment</p>
        <p>-</p>
        <p>"Forms and Form Validation" for</p>
        <p
          className='cursor-pointer font-bold underline underline-offset-4 hover:text-pink-300 transition-colors duration-300'
          onClick={()=>{window.open(`https://celebaltech.com`, '_blank')}}
        >Celebal Technologies</p>
        <p>Summer Internship</p>
      </div>
      <div className='flex flex-row gap-1 flex-wrap justify-center'>
        <span className=''>Developed by</span> 
        <span 
          className='cursor-pointer font-bold underline underline-offset-4 hover:text-pink-300 transition-colors duration-300'
          onClick={()=>{window.open(`https://bodhisatta1999.netlify.app/`, '_blank')}} 
        >Bodhisatta Bhattacharjee</span>
      </div>
    </div>
  )
}

export default Footer