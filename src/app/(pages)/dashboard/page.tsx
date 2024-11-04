
import Assets from '@/app/(pages)/dashboard/Assets'
import Overview from '@/app/(pages)/dashboard/Overview'
import Header from '@/components/shared/Header'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col  bg-[#24272e] text-white' >
        <Header/>
      <div className=' w-full h-full flex gap-10 p-7'>
        <Overview/>
       
<Assets/>
      </div>
    </div>
  )
}

export default Dashboard