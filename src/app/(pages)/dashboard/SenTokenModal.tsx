"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSubstrateContext } from "@/contexts/useSubstrateContext";
import { useState } from "react";
import { getApi } from "@/config/utils";
import { Toast } from "@/components/ui/toast";
import { ConnectRes } from "@/types";

const formSchema = z.object({
    recipient: z.string().min(2).max(50),
    amount:z.coerce.number().positive(),

});

const SenTokenModal = ({
  isDialogOpen,
  setIsDialogOpen,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipient: "",
      amount: 1000,
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);


  const {
    isConnected,
    address,
    setLoading,
    setErrMsg,
    setIsConnected,
    setAddress,
  } = useSubstrateContext();


  const handleConnect = () => {
    if (typeof window.fire !== "undefined") {
      setLoading(true);

      window.fire
        .request({
          method: "connect",
        })
        .then((res: ConnectRes) => {
          setAddress(res.evmAddress);
          setIsConnected(true);
        })
        .catch((error: any) => {
          if (error instanceof Error) setErrMsg("Something went wrong!");
        })
        .finally(() => setLoading(false));
    } else {
     
      Toast({
        variant:"destructive",
        className:"",
        content:"Please install 5ire wallet. You can download it here"
      })
    }
  };


  const handleSendToken = async (recipient: string, amount: number) => {
    try {
      console.log("address", address);
      if (!address) {
        handleConnect()
      }
      setIsLoading(true);
      const api = await getApi();
      console.log("🚀 ~ api ~ :", api);
      if (window.fire) {
        await bondMoreFunds(recipient, amount, api);
      }
    } catch (error) {
      console.log("🚀 ~ handleSendMessage ~ error:", error);
      setIsLoading(false);
    }
  };

  const tx = (address: string, transfermethod: any) => {
    return new Promise(async (resolve, reject) => {
      try {
        const txhash = await transfermethod.signAndSend(address, {
          signer: window.fire,
        });
        resolve({
          error: false,
          txHash: txhash,
        });
      } catch (err) {
        console.log("🚀 ~ returnnewPromise ~ err:", err);
      }
    });
  };

  const bondMoreFunds = async (recipient: string, amount: number, api: any) => {
    try {
      const batchAll = await api.tx.balances.transfer(
       recipient,
        amount.toString(),
      );
      let res = await tx(address, batchAll);

      if (res) {
        console.log("res", res);

        setIsLoading(false);
        Toast(
          {
            content: `Transaction sent successfully`,
         
          }
        )
      }
    } catch (e) {
      setIsLoading(false);
      console.log("Error in bondMoreFunds:", e);
    }
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    handleSendToken(values.recipient, values.amount)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Send Token</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-2 w-full">
          <div className="flex flex-col gap-2">
            <p>Sending from</p>
          </div>
         
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="w-full flex items-center justify-between gap-5">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="recipient"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recipient*</FormLabel>
                        <FormControl>
                          <Input placeholder="Recipient" {...field} />
                        </FormControl>
                       
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount*</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="1000" {...field} />
                        </FormControl>
                       
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SenTokenModal;
