'use client'
import React, { useRef, useState } from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import imgs from '@/assets/images'
 
const formSchema = z.object({
    image: z.string(),
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string()
})
 

const FormOrganisation = () => {

    const [file, setFile] = useState<File | null>(null)

  const inputRef = useRef<HTMLInputElement | null>(null)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
         image:"",
         name:"",
         description:""
        },
      })

      const image = form.watch('image')
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-screen-sm w-full bg-[#1b2028] p-6 text-white">

      {(file || image) ? (
          <div>
            <Image
              src={file ? URL.createObjectURL(file) : image}
              width={128}
              height={128}
              alt='preview'
              className='w-32 h-32 object-cover'
            />
            {/* <Button
              type='button'
              variant={'destructive'}
              size={'sm'}
              onClick={() => {
                setFile(null)
                form.setValue('image', '')
                if (inputRef.current) {
                  inputRef.current.value = ''
                }
              }}
            >
              Xóa hình ảnh
            </Button> */}
          </div>
) : (
    <Image
    src={imgs.img_empty_avatar}
    width={128}
    height={128}
    alt='preview'
    className='w-32 h-32 object-cover rounded-full'
  />
)



}

      <FormField
          control={form.control}
          name='image'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hình ảnh</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  accept='image/*'
                  ref={inputRef}
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      setFile(file)
                      field.onChange('http://localhost:3000/' + file.name)
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Name</FormLabel>
              <FormControl>
                <Input className='bg-[#24272e]' placeholder="Add a name" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input className='bg-[#24272e]' placeholder="Add a description to your organisation" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
       <div className='w-full flex items-center justify-between'>
       <Button type="button">Back</Button>
       <Button type="submit">Next</Button>
       </div>
      </form>
    </Form>
  )
}

export default FormOrganisation