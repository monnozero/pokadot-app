import FormOrganisation from '@/app/(pages)/create-organisation/components/FormOrganisation'
import { MultiForm } from '@/app/(pages)/create-organisation/components/MultiForm'
import { Steps } from '@/app/(pages)/create-organisation/components/Steps'
import React from 'react'

const CreateOrganisation = () => {
  return (
    <div className='h-[100vh] w-full flex text-white'>
        <div className='h-full w-[20%] bg-[#1b2028]'>
            <Steps/>
        </div>
        <div className='flex items-center justify-center h-full w-[80%] bg-[#24272e]'>
            {/* <FormOrganisation/> */}
            <MultiForm/>
        </div>

    </div>
  )
}

export default CreateOrganisation