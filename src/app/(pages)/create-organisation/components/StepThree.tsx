'use client'

import imgs from '@/assets/images'
import MutisigIcon from '@/assets/MutisigIcon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { useMultiContext } from '@/contexts/multistepFormContext'
import Image from 'next/image'

import { useFormContext } from 'react-hook-form'

const addOnsData = [
  {
    text: 'Online service',
    name: 'onlineService',
    description: 'Acess to mutiplayer games',
    monthValue: '1',
    yearValue: '10',
  },
  {
    text: 'Larger storage',
    name: 'largerStorage',
    description: 'Extra 1TB of cloud save',
    monthValue: '2',
    yearValue: '20',
  },
  {
    text: 'Customizable profile',
    name: 'customProfile',
    description: 'Custom theme on your profile',
    monthValue: '2',
    yearValue: '20',
  },
]

export function StepThree() {
  const { control } = useFormContext()
  const { isYear } = useMultiContext()
  return (
    <div>
    <p className='font-bold'>Review</p>
    <p className='text-xs'>Review the details of your organisation, these can be edited later as well</p>
    <div className='w-full bg-[#1b2028] p-6 rounded-xl mt-5 gap-8 flex flex-col'>
      <div className='border border-white rounded-xl py-3 px-2'>
        <Image src={imgs.img_empty_avatar} alt='' width={45} height={45}/>
      </div>

      <div className='flex flex-col gap-2'>
      <p className='text-xs'>MULTISIGS</p>
      <div className='border border-white rounded-xl py-3 px-2'>
        <Image src={imgs.img_empty_avatar} alt='' width={45} height={45}/>
      </div>
      </div>

      <Button className='flex gap-2 items-center justify-center'>
        <MutisigIcon/>
     <p> Create Multisig</p>
      </Button>
    </div>
      {/* {addOnsData.map((adds, i) => {
        return (
          <FormField
            key={i}
            control={control}
            name={adds.name}
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Checkbox
                    onCheckedChange={field.onChange}
                    checked={field.value}
                    className="absolute inset-y-1/3 ml-4 size-5"
                  />
                </FormControl>
                <FormLabel className="flex h-[80px] cursor-pointer items-center gap-4 rounded-md border p-2 pl-12 shadow-sm hover:border-indigo-800 peer-focus-visible:ring-1 peer-aria-checked:border-indigo-600 lg:h-full lg:items-start lg:justify-between lg:p-5 lg:pl-12">
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="font-bold text-sky-950">{adds.text}</p>
                    <p className="text-xs text-gray-400">{adds.description}</p>
                  </div>
                  <p className="text-sm text-indigo-600">
                    ${isYear ? adds.yearValue : adds.monthValue}/
                    {isYear ? 'yr' : 'mo'}
                  </p>
                </FormLabel>
              </FormItem>
            )}
          />
        )
      })} */}
    </div>
  )
}
