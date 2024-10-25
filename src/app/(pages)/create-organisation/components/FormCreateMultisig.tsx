import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form'
  import { Input } from '@/components/ui/input'

  import { zodResolver } from "@hookform/resolvers/zod"
  import { useForm } from "react-hook-form"
import { z } from "zod"
import TransferList from "@/app/(pages)/create-organisation/components/TransferList"

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    network: z.string(),
    threshold: z.number()
  })


export function FormCreateMultisig() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log("sfdsdf",values)
      }
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >Create Multisig</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Create Multisig</DialogTitle>
          <DialogDescription>
           
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-2 w-full">
       
        <Form {...form}>
      <form 
   
      
      className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
              <FormLabel>Network</FormLabel>
              <FormControl>
                <Input placeholder="network" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between gap-2">
        <Input placeholder="address"  />
        <Button>Add</Button>
        </div>
        <div>
          <TransferList/>

        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>* Threshold
              </FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

<DialogFooter className="w-full flex gap-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full">
              Cancel
            </Button>
          </DialogClose>
        <Button onClick={form.handleSubmit(onSubmit)} type="button" className="w-full">Create</Button>

        </DialogFooter>
      </form>
    </Form>
        </div>
     
      </DialogContent>
    </Dialog>
  )
}
