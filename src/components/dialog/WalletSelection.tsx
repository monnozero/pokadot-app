// "use client";
// import AccountSelect from "@/components/AccountSelect";
// import { Button } from "@/components/ui/button";

// import { useWalletContext } from "@/providers/WalletProvider";
// import Wallet from "@/wallets/Wallet";
// import Image from "next/image";
// import React, { useState } from "react";

// interface WalletButtonProps {
//   idWallet: string;
//   walletInfo: Wallet;
//   afterSelectWallet?: () => void;
// }

// const WalletButton = ({
//   idWallet,
//   walletInfo,
//   afterSelectWallet,
// }: WalletButtonProps) => {
//   const { name, id, logo, ready, installed } = walletInfo;
//   const { enableWallet } = useWalletContext();

//   const connectWallet = () => {
//     console.log("connectWallet", id);

//     enableWallet(id);

//     // afterSelectWallet && afterSelectWallet();
//   };

//   return (
//     <Button
//       onClick={connectWallet}
//       // disabled={!installed}
//       className="w-full justify-start items-center gap-4 text-lg"
//     >
//       <Image src={logo} alt={`${name}`} width={24} height={24} />
//       {/* <span>{name}</span> */}
//     </Button>
//   );
// };

// const WalletSelection = () => {
//   const { availableWallets } = useWalletContext();
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   return (
//     <div className="flex flex-col gap-5 w-full items-center justify-center  ">
//       {isOpen && (
//         <div className="flex flex-col gap-3">
//           <div className="flex gap-2">
//             {availableWallets.map((one) => (
//               <WalletButton
//                 idWallet={one.id}
//                 key={one.id}
//                 walletInfo={one}
//                 // afterSelectWallet={onClose}
//               />
//             ))}
//           </div>
//           <AccountSelect />
//         </div>
//       )}

//       <Button
//         className="max-w-[350px] w-full"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         Connect Wallet
//       </Button>
//     </div>
//   );
// };

// export default WalletSelection;
