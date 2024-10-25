import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface Props {
  className?: string;
  children?: ReactNode;

  [prop: string]: any;
}

export interface NetworkInfo {
  id: string;
  name: string;
  logo: string;
  provider: string;
  prefix: number;
  symbol: string;
  decimals: number;
  subscanUrl?: string;
  chainSpecFileName?: string;
  faucetUrl?: string;
}

export type KeypairType = 'ed25519' | 'sr25519' | 'ecdsa' | 'ethereum';

export interface InjectedAccount {
  address: string;
  genesisHash?: string | null;
  name?: string;
  type?: KeypairType;
}

export type Pop<T extends any[]> = T extends [...infer U, any] ? U : never;
export type Args<T> = T extends [] ? { args?: [] | undefined } : { args: T };
export type OmitNever<T> = { [K in keyof T as T[K] extends never ? never : K]: T[K] };

export enum Wallet {
  POLKADOT = 'polkadot-js',
SUBWALLET = 'subwallet-js',
TALISMAN = 'talisman',
}

export const tokenSymbol = {
	ASTR: 'ASTR',
	AZERO: 'AZERO',
	DOT: 'DOT',
	KSM: 'KSM',
	ROC: 'ROC',
	WND: 'WND'
};

export type TokenSymbol = typeof tokenSymbol[keyof typeof tokenSymbol];


export interface ChainProps {
  'blockTime': number;
  'logo'?: any;
  'ss58Format': number;
  'tokenDecimals': number;
  'tokenSymbol': TokenSymbol;
  'chainId': number;
  'rpcEndpoint': string;
  'existentialDeposit': string;
}


export type ChainPropType = {
  [index: string]: ChainProps;
};


export interface ConnectRes {
  evmAddress: string
  nativeAddress: string
  publicKey: string
}