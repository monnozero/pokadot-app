'use client'
import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

export type SubstrateContextType = {
  loading: boolean;
  errMsg: string;
  isConnected: boolean;
  isAuthorized: boolean;
  address: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setErrMsg: Dispatch<SetStateAction<string>>;
  setIsConnected: Dispatch<SetStateAction<boolean>>;
  setIsAuthorized: Dispatch<SetStateAction<boolean>>;
  setAddress: Dispatch<SetStateAction<string>>;
};

// Tạo giá trị mặc định cho context
const defaultContext: SubstrateContextType = {
  loading: false,
  errMsg: '',
  isConnected: false,
  isAuthorized: false,
  address: '',
  setLoading: () => {},
  setErrMsg: () => {},
  setIsConnected: () => {},
  setIsAuthorized: () => {},
  setAddress: () => {},
};

const SubstrateContext = createContext<SubstrateContextType>(defaultContext);

export const SubstrateProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');

  return (
    <SubstrateContext.Provider
    value={{
      loading,
      errMsg,
      isConnected,
      isAuthorized,
      address,
      setLoading,
      setErrMsg,
      setIsConnected,
      setIsAuthorized,
      setAddress,
    }}
    >
      {children}
    </SubstrateContext.Provider>
  )
}

// Hook để sử dụng SubstrateContext


export const useSubstrateContext = () => {
  return useContext(SubstrateContext);
};