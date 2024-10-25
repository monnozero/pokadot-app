


import { Steps } from '@/app/(pages)/create-organisation/components/Steps'
import { MultiStepContenxtProvider } from '@/contexts/multistepFormContext'
import { ReactNode } from 'react'

interface MultiStepFormLayout {
  children: ReactNode
}

export default function MultiStepFormLayout({ children }: MultiStepFormLayout) {
  return (
    <MultiStepContenxtProvider>
      {/* <div className="mx-auto flex max-h-min flex-col rounded-md lg:my-40 lg:grid lg:max-w-[850px] lg:grid-cols-3 lg:grid-rows-5 lg:items-center lg:bg-white lg:p-6 lg:shadow-md"> */}
        {/* <Steps /> */}
        {children}
       
      {/* </div> */}
    </MultiStepContenxtProvider>
  )
}
