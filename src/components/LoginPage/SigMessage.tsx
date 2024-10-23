"use client";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loading-button";
import { getApi } from "@/config/utils";
import { useSubstrateContext } from "@/providers/useSubstrateContext";
import { stringToHex } from "@polkadot/util";
import { Toast } from "@radix-ui/react-toast";
import React, { useState } from "react";

const SigMessage = () => {
  const {
    isConnected,
    address,
    setLoading,
    setErrMsg,
    setIsConnected,
    setAddress,
  } = useSubstrateContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async () => {
    try {
      console.log("address", address);
      if (!address) return;
      setIsLoading(true);
      const api = await getApi();
      console.log("🚀 ~ api ~ :", api);
      if (window.fire) {
        await bondMoreFunds(address, api);
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

  const bondMoreFunds = async (address: string, api: any) => {
    try {
      const batchAll = await api.tx.balances.transfer(
        "0xD08B851df86AD3777239e26016Bc2695817bD86c",
        "1000"
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

  return (
    <div>
      <LoadingButton loading={isLoading} onClick={handleSendMessage}>
        Transfer
      </LoadingButton>
    </div>
  );
};

export default SigMessage;
