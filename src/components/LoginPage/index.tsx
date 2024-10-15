import WalletLoginIcon from '@/assets/WalletLoginIcon'
import WalletSelection from '@/components/dialog/WalletSelection'
import NetworkSelection from '@/components/NetworkSelection'
import { Button } from '@/components/ui/button'
import React from 'react'

const LoginPage = () => {
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
<WalletSelection/>

<NetworkSelection/>
            </div>
        </div>

    </div>
  )
}

export default LoginPage