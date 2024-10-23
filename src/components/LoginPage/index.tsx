'use client'
import WalletLoginIcon from '@/assets/WalletLoginIcon'
import ButtonWallet from '@/components/ButtonWallet'
import SigMessage from '@/components/LoginPage/SigMessage'
import useIsFire from '@/hooks/useIsFire'
import { useSubstrateContext } from '@/providers/useSubstrateContext'
import { ConnectRes } from '@/types'
import React, { useCallback, useEffect } from 'react'

const LoginPage = () => {

  const { isFire } = useIsFire()
  const { setAddress, setIsConnected, address } = useSubstrateContext();

  useEffect(() => {
    if (isFire) {
      window.fire.on('accountChanged', handleAccountChanged);
      return () => {
        window.fire.removeListener('accountChanged', handleAccountChanged);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFire]);

  useEffect(() => {
    if (isFire) {
      window.fire.on('networkChanged', handleNetworkChanged);

      return () => {
        window.fire.removeListener('networkChanged', handleNetworkChanged);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFire]);

  const handleAccountChanged = useCallback((res: ConnectRes) => {
    setAddress(res.nativeAddress);
    setIsConnected(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleNetworkChanged = () => {
    console.log('Network changed')
  }
  return (
    <div className='w-full h-[100vh] flex text-white'>
        <div className="w-[40%] h-full bg-[url('/login-page-frame.webp')] bg-no-repeat bg-cover bg-center"></div>
        <div className='w-[60%] h-full bg-gray-900 p-[30px] flex flex-col gap-5'>
            <div></div>
            <div className='w-full h-full bg-black flex flex-col gap-[10px] items-center justify-center '>
                    <WalletLoginIcon/>
                    <p className='font-bold'>Get Started
                    </p>
                    <p className='text-sm'>Connect your wallet

</p>
<p className='text-sm'>Your first step towards creating a safe & secure MultiSig

</p>
{/* <Button className='max-w-[350px] w-full'>Connect Wallet</Button> */}
{/* <WalletSelection/> */}

<ButtonWallet/>

{

  address &&  <SigMessage/>
}
            </div>
        </div>

    </div>
  )
}

export default LoginPage