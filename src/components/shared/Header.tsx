import LogoIcon from '@/assets/LogoIcon'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center  w-full bg-[#1b2028] p-6'>
        <LogoIcon/>
        <div className='font-bold text-2xl text-blue-500 bg-[#24272e] py-2 px-3 rounded-lg'>Dashboard</div>
    </div>
  )
}

export default Header