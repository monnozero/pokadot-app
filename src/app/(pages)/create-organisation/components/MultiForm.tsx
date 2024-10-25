'use client'

import { StepOne } from '@/app/(pages)/create-organisation/components/StepOne'
import { StepThree } from '@/app/(pages)/create-organisation/components/StepThree'
import { StepTwo } from '@/app/(pages)/create-organisation/components/StepTwo'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useMultiContext } from '@/contexts/multistepFormContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'


const formSchema = z.object({
  // name: z.string().min(1, { message: 'This field is required' }),
  // email: z.string().email({ message: 'This field is required' }),
  // phone: z.string().min(8, { message: 'This field is required' }),
  image: z.string(),

  name: z.string(),
  description: z.string(),
  plan: z.string(),
  onlineService: z.boolean(),
  largerStorage: z.boolean(),
  customProfile: z.boolean(),
  userTotal: z.number(),
})

type NewFormData = z.infer<typeof formSchema>

export function MultiForm() {
  const { step, nextStep, prevStep, createUserData, isYear, file, setFile } = useMultiContext()

  const form = useForm<NewFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: '',

      name: '',
      description: '',
      plan: '',
      onlineService: false,
      largerStorage: false,
      customProfile: false,
      userTotal: 0,
    },
  })

  const image = form.watch('image')


  function onSubmit(values: NewFormData) {
    nextStep()
    let userPlanTotal = 0
    if (values.plan === 'Arcade') {
      userPlanTotal += 9
    }
    if (values.plan === 'Advanced') {
      userPlanTotal += 12
    }
    if (values.plan === 'Pro') {
      userPlanTotal += 15
    }
    if (values.onlineService) {
      userPlanTotal += 1
    }
    if (values.largerStorage) {
      userPlanTotal += 2
    }
    if (values.customProfile) {
      userPlanTotal += 2
    }
    if (isYear) {
      userPlanTotal *= 10
    }
    values.userTotal += userPlanTotal
    if (step === 3) {
      createUserData(values)
    }
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-screen-sm w-full"
      >
        <FormProvider {...form}>
          {step === 1 && <StepOne image={image} file={file} setFile={setFile}  />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          
        </FormProvider>
        {step < 4 && (
          <div className="flex w-full  justify-between bg-white p-4 lg:bottom-0 rounded-xl">
            <Button
              type="button"
             
              className={`${step === 1 ? 'invisible' : ''}`}
              onClick={() => prevStep()}
            >
              Go Back
            </Button>
            <Button type="submit">
              {step === 3 ? 'Confirm' : 'Next Step'}
            </Button>
          </div>
        )}
      </form>
    </Form>
  )
}
