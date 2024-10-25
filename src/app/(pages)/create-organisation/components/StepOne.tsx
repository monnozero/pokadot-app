'use client'
import imgs from '@/assets/images'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useRef } from 'react'
import { useFormContext } from 'react-hook-form'

export function StepOne({file, image,setFile}: {
  file: File | null,
  image: string,
  setFile: (file: File | null) => void,
}) {
  const { control } = useFormContext()
  const inputRef = useRef<HTMLInputElement | null>(null)


  return (
    <>
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
          control={control}
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
          control={control}
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
          control={control}
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
      {/* <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center justify-between max-w-screen-sm w-full">
              Name
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input placeholder="e.g Stephen King" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center justify-between">
              Email Address
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input placeholder="e.g stephenking@lorem.com" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center justify-between">
              Phone Number
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input placeholder="e.g +1 234 567 890" {...field} />
            </FormControl>
          </FormItem>
        )}
      /> */}
    </>
  )
}
