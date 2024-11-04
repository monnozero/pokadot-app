import ArrowRight from '@/assets/ArrowRight'
import NoAssets from '@/assets/NoAssets'
import React from 'react'

const Assets = () => {
  return (
    <div className="w-full  flex flex-col gap-8 ">
    <div className="flex items-center justify-between">
      <p className="text-2xl">Assets</p>
      <div className="flex gap-2 items-center justify-center">
    
        <p>View All</p>
        <ArrowRight/>
      </div>
    </div>
    <div className="border border-white rounded-lg py-6 px-7 flex flex-col items-center justify-center gap-2 h-[260px] bg-[#1b2028]">
 
    <NoAssets/>
    <p>No Assets Found.</p>

     
    </div>
   
  </div>
  )
}

export default Assets