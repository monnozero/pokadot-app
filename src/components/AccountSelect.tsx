"use client";
import Address from "@/components/Address";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";

import useDisplayAddress from "@/hooks/useDisplayAddress";
import { useWalletContext } from "@/providers/WalletProvider";
import Image from "next/image";
import React, { useEffect, useMemo } from "react";

const AccountSelect = () => {
  const { accounts, selectedAccount, setSelectedAccount } = useWalletContext();
  console.log("🚀 ~ AccountSelect ~ accounts:", accounts);

  const addresses = useMemo(() => accounts.map((a) => a.address), [accounts]);
  const displayAddress = useDisplayAddress(selectedAccount?.address);

  useEffect(() => {
    if (
      selectedAccount &&
      accounts.map((one) => one.address).includes(selectedAccount.address)
    ) {
      return;
    }

    setSelectedAccount(accounts[0]);
  }, [accounts, selectedAccount, setSelectedAccount]);

  if (!selectedAccount) {
    return <></>;
  }

  const { name, address } = selectedAccount;
  return (
    <>
      {!accounts ? (
        <Spinner />
      ) : (
        <Select value={displayAddress}>
          <SelectTrigger className="max-w-[350px] w-full py-5">
            <SelectValue defaultValue={"Select account"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Account</SelectLabel>

              {accounts.map((one) => (
                <SelectItem
                  onClick={() => setSelectedAccount(one)}
                  key={one.address}
                  value={one.address}
                >
                  <Address
                    key={one.address}
                    extensionName={one.name}
                    address={one.address}
                  />
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </>
  );
};

export default AccountSelect;
