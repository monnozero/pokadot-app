"use client";

import { FormCreateMultisig } from "@/app/(pages)/create-organisation/components/FormCreateMultisig";
import EmptyIcon from "@/assets/EmptyIcon";
import UnlinkIcon from "@/assets/UnlinkIcon";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useMultiContext } from "@/contexts/multistepFormContext";
import { getAddress } from "@/lib/utils";

import { useFormContext } from "react-hook-form";

const plansData = [
  {
    text: "Arcade",
    icon: "",
    monthValue: "9",
    yearValue: "90",
  },
  {
    text: "Advanced",
    icon: "",
    monthValue: "12",
    yearValue: "120",
  },
  {
    text: "Pro",
    icon: "",
    monthValue: "15",
    yearValue: "150",
  },
];

const multiSig = [
  {
    name: "mêmm",
    signatories: [
        "162pQjXT4fJcmW97PBvi2mAbvCo2iMWDednApZSjmHYyCaZJ",
        "14ugLmM2wSktzsX4t7fEvKV9BekBBixuqLC7cJRXtY58n6aM"
    ],
    network: "polkadot",
    address: "5CcqFSPaL3HqPZmzxvGVncWxCNeKrRjK43RdQ6jTYcn36PnT",
    threshold: 2,
    type: "SUBSTRATE",
    created_at: "2024-10-24T08:28:42.234Z",
    updated_at: "2024-10-24T08:28:42.234Z",
    proxy: []
}
]
export function StepTwo() {
  const { isYear, setPlan } = useMultiContext();

  return (
    <>
      <div className="bg-[#1b2028] w-full flex items-center justify-between p-6 rounded-lg">
        <p className="font-bold">Create MultiSig</p>
        <FormCreateMultisig />
      </div>
      <div className="bg-[#1b2028] w-full flex flex-col  p-6 rounded-lg space-y-4">
        <p className="font-bold">Link MultiSig(s)</p>

        <p className="text-xs">
          Already have a MultiSig? You can link your existing multisigs with a
          few simple steps{" "}
        </p>

       {
        multiSig ? (
<>
{
  multiSig.map((msig, i) => {
    return (
      <div key={i} className="flex items-center justify-between  border border-gray-300 rounded-lg py-3 px-4">
      <div className="flex flex-col gap-2">
      <p className="text-xs">{msig.name}</p>
      <p className="text-xs text-gray-400">{getAddress(msig.address)}</p>
      </div>
        <Button type="button" className="flex items-center justify-center gap-2">
          <UnlinkIcon/>
          <p>Unlink Multisig</p>
        </Button>
      </div>
    )
  })
}
</>
        ) : (
          <div className="w-full flex flex-col gap-2 items-center justify-center p-6">
          <EmptyIcon />
          <p className="text-xs">
            No onChain Multisig available on this network
          </p>
        </div>
        )
       }
      </div>
    </>
    // <FormField
    //   control={control}
    //   name="plan"
    //   render={({ field }) => (
    //     <FormItem className="lg:flex lg:flex-col lg:gap-5">
    //       <FormControl className="lg:grid lg:h-48 lg:grid-cols-3">
    //         <RadioGroup onChange={field.onChange}>
    //           {plansData.map((plan, i) => {
    //             return (
    //               <FormItem key={i} className="">
    //                 <FormControl>
    //                   <RadioGroupItem
    //                     value={plan.text}
    //                     className="peer sr-only"
    //                   />
    //                 </FormControl>
    //                 <FormLabel className="flex h-[80px] cursor-pointer items-center gap-4 rounded-md border p-2 shadow-sm hover:border-indigo-800 peer-focus-visible:ring-1 peer-aria-checked:border-indigo-600 lg:h-full lg:flex-col lg:items-start lg:justify-between lg:p-5">
    //                   {plan.icon}
    //                   <div className="flex flex-col font-medium text-sky-950">
    //                     <p className="text-lg">{plan.text}</p>
    //                     <p className="-mt-1 text-gray-400">
    //                       ${isYear ? plan.yearValue : plan.monthValue}/
    //                       {isYear ? 'yr' : 'mo'}
    //                     </p>
    //                     {isYear && (
    //                       <span className="mt-1 text-xs text-indigo-600">
    //                         2 months free
    //                       </span>
    //                     )}
    //                   </div>
    //                 </FormLabel>
    //               </FormItem>
    //             )
    //           })}
    //         </RadioGroup>
    //       </FormControl>
    //       <div className="flex items-center justify-center gap-5 rounded-sm bg-slate-50 p-2">
    //         <Label
    //           className={`lg:text-lg  ${!isYear ? 'text-indigo-600' : 'text-gray-400'}`}
    //           htmlFor="plan-mode"
    //         >
    //           Monthy
    //         </Label>
    //         <Switch
    //           id="plan-mode"
    //           onClick={() => setPlan()}
    //           className="data-[state=checked]:bg-sky-950 data-[state=unchecked]:bg-sky-950"
    //           checked={isYear}
    //         />
    //         <Label
    //           className={`lg:text-lg ${isYear ? 'text-indigo-600' : 'text-gray-400'}`}
    //           htmlFor="plan-mode"
    //         >
    //           Yearly
    //         </Label>
    //       </div>
    //     </FormItem>
    //   )}
    // />
  );
}
