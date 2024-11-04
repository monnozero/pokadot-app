import TransactionDropDown from "@/app/(pages)/dashboard/TransactionDropDown";
import EditIcon from "@/assets/EditIcon";
import ShowIcon from "@/assets/ShowIcon";
import { Button } from "@/components/ui/button";
import React from "react";

const Overview = () => {
  return (
    <div className="w-full  flex flex-col gap-8 ">
      <div className="flex items-center justify-between">
        <p className="text-2xl">Overview</p>
        <div className="flex gap-2 items-center justify-center">
          <EditIcon />
          <p>Edit Details</p>
        </div>
      </div>
      <div className="border border-white rounded-lg py-6 px-7 flex flex-col gap-2 h-[188px] bg-[#1b2028]">
        <div className="flex items-center justify-between">
          <p>Total Balance</p>
          <p>USD</p>
        </div>

        <div className="text-4xl flex items-center gap-4">
          <p>$ 0.00</p>
          <button>
            <ShowIcon />
          </button>
        </div>
      </div>
      <TransactionDropDown/>
    </div>
  );
};

export default Overview;
