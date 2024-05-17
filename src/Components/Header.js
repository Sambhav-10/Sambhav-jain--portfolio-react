import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center fixed w-full mt-5  '>
      <div className='flex justify-around  h-16 items-center  bg-opacity-20 w-[90%]  backdrop-filter backdrop-blur-lg border-t-4 rounded-full border-[#77b28c]'>
        <div className='text-3xl font-bold text-[#77b28c]'>Sambhav jain</div>
        <div className='flex text-white gap-6 list-none text-xl'>
            <li className='hover:text-[#77b28c] cursor-pointer'>Home</li>
            <li className='hover:text-[#77b28c] cursor-pointer'>About</li>
            <li className='hover:text-[#77b28c] cursor-pointer'>Portfolio</li>
            <li className='hover:text-[#77b28c] cursor-pointer'>Contact</li>
        </div>
      </div>
    </div>
  )
}

export default Header
