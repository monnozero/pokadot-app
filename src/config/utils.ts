import { ApiPromise, WsProvider } from "@polkadot/api";
import config from "."

let api: ApiPromise;

export async function getApi() {
  const { wssProvider } = config;
  console.log("🚀 ~ getApi ~ wssProvider:", wssProvider)

  const wsProvider = new WsProvider(wssProvider);

    api = await ApiPromise.create({ provider: wsProvider });
    console.log("🚀 ~ getApi ~ api:", api)
  

  return api;
}