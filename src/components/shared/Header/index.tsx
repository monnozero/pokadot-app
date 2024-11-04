import DocsIcon from "@/assets/DocsIcon";
import DonateIcon from "@/assets/DonateIcon";
import AddressDropDown from "@/components/shared/Header/components/AddressDropDown";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between  w-full bg-[#1b2028] p-6">
      <div className="font-bold text-2xl text-blue-500 bg-[#24272e] py-2 px-3 rounded-lg">
        Dashboard
      </div>

      <div className="flex gap-8">
        <AddressDropDown/>
        <div className="flex items-center justify-center gap-2 border border-[#ff9f1c] py-2 px-4 rounded-lg">
          <DonateIcon />
          <p className="text-[#ff9f1c]">Donate</p>
        </div>

        <div className="flex items-center justify-center gap-2 border border-[#ff9f1c] py-2 px-4 rounded-lg">
          <DocsIcon />
          <p className="text-[#ff9f1c]">Docs</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
