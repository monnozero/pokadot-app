'use client'
import AddressIcon from '@/assets/AddressIcon'
import { useSubstrateContext } from '@/contexts/useSubstrateContext'
import useIsFire from '@/hooks/useIsFire'
import { getAddress } from '@/lib/utils'
import { ConnectRes } from '@/types'
import React, { useCallback, useEffect } from 'react'

const AddressDropDown = () => {
    
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
    <div className="flex items-center justify-center gap-2 border border-[#1573fe] py-2 px-4 rounded-lg">
        <AddressIcon/>
    <p className="">{address &&  getAddress(address)}</p>
  </div>

  )
}

export default AddressDropDown