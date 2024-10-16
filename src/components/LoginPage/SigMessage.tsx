'use client'
import { Button } from '@/components/ui/button'
import { getApi } from '@/config/utils';
import { useSubstrateContext } from '@/providers/useSubstrateContext';
import { stringToHex } from '@polkadot/util';
import React from 'react'

const SigMessage = () => {

    const {
        isConnected,
        address,
        setLoading,
        setErrMsg,
        setIsConnected,
        setAddress,
      } = useSubstrateContext();

  const handleSendMessage = async () => {
try {
    console.log("address",address)
    if(!address) return;
    const api = await getApi();
    console.log("🚀 ~ api ~ :", api)
    if(window.fire) {
      try {
        await bondMoreFunds(address,api)
      } catch (error) {
        
      }
    }
  //   api.tx.balances
  // .transfer('0xD08B851df86AD3777239e26016Bc2695817bD86c',10 )
  // .signAndSend(address, { signer: window.fire }, (status) => {  });
   
    // const signPayload = window?.fire?.signPayload;

    // if (!!signPayload) {
    //    const { signature } = await signPayload({
    //        address: address,
    //        data: stringToHex('message to sign'),
    //        type: 'bytes'
    //    });
    // console.log("🚀 ~ signature ~ :", signature)
    // if (!!window?.fire?.signPayload) {
    //     const { signature } = await window?.fire?.signPayload({
    //       address: address,
    //       data: '0x43434343',
    //       type: 'bytes'
    //     });
    //     console.log("🚀 ~ signature ~ :", signature)
    //   }

      
    
} catch (error) {
    console.log("🚀 ~ handleSendMessage ~ error:", error)
    
}
  }

   const tx = (address:string, transfermethod:any) => {
    return new Promise(async (resolve, reject) => {
      try {
        const txhash = await transfermethod.signAndSend(address, { signer: window.fire });
        resolve({
          error: false,
          txHash: txhash,
        });
      } catch (err) {
       console.log("🚀 ~ returnnewPromise ~ err:", err)
       
      }
    });
  };
  

  const bondMoreFunds = async (address:string, api:any) => {
    try {
     
      const batchAll = await api.tx.balances.transfer('0xD08B851df86AD3777239e26016Bc2695817bD86c','1000');
      let res = await tx(address, batchAll);
      return await res;
    } catch (e) {
      console.log('Error in bondMoreFunds:', e);

    }
  };
  

  
    return (

    <div>
        <Button onClick={handleSendMessage}>Send Message</Button>
    </div>
  )
}

export default SigMessage