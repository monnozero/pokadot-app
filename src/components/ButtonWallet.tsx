"use client";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
import { getAddress } from "@/lib/utils";

import { useSubstrateContext } from "@/providers/useSubstrateContext";
import { ConnectRes } from "@/types";

import React from "react";

const ButtonWallet = () => {
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

  const handleDisconnect = () => {
    if (typeof window.fire !== "undefined") {
      setLoading(true);

      window.fire
        .request({
          method: "disconnect",
        })
        .then(() => {
          setAddress("");
          setIsConnected(false);
        })
        .catch((error: any) => {
          if (error instanceof Error) setErrMsg("Something went wrong!");
        })
        .finally(() => setLoading(false));
    } else {
    
    }
  };

  return (
    <>
    
      {isConnected ? (
        <Button onClick={handleDisconnect} className="max-w-[350px] w-full">
          Disconnect {address &&  getAddress(address)}
        </Button>
      ) : (
        <Button 
        onClick={handleConnect}
        className="max-w-[350px] w-full">Connect Wallet</Button>
      )}
    </>
  );
};

export default ButtonWallet;
