'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";
// Shadcn UI Button

type Item = {
  id: number;
  name: string;
};

export default function TransferList() {
  // Initial data for both lists
  const [listA, setListA] = useState<Item[]>([
    { id: 1, name: "Item A1" },
    { id: 2, name: "Item A2" },
    { id: 3, name: "Item A3" },
  ]);

  const [listB, setListB] = useState<Item[]>([
    { id: 4, name: "Item A4" },

  ]);

  // State to hold selected items
  const [selectedA, setSelectedA] = useState<number[]>([]);
  const [selectedB, setSelectedB] = useState<number[]>([]);

  // Handle selecting items from List A
  const handleSelectA = (id: number) => {
    if (selectedA.includes(id)) {
      setSelectedA(selectedA.filter((itemId) => itemId !== id));
    } else {
      setSelectedA([...selectedA, id]);
    }
  };

  // Handle selecting items from List B
  const handleSelectB = (id: number) => {
    if (selectedB.includes(id)) {
      setSelectedB(selectedB.filter((itemId) => itemId !== id));
    } else {
      setSelectedB([...selectedB, id]);
    }
  };

  // Move selected items from List A to List B
  const moveToB = () => {
    const itemsToMove = listA.filter((item) => selectedA.includes(item.id));
    setListA(listA.filter((item) => !selectedA.includes(item.id)));
    setListB([...listB, ...itemsToMove]);
    setSelectedA([]); // Clear selected after moving
  };

  // Move selected items from List B to List A
  const moveToA = () => {
    const itemsToMove = listB.filter((item) => selectedB.includes(item.id));
    setListB(listB.filter((item) => !selectedB.includes(item.id)));
    setListA([...listA, ...itemsToMove]);
    setSelectedB([]); // Clear selected after moving
  };

  return (
    <div className="flex gap-2 p-4">
      {/* List A */}
      <div className="w-1/2">
        <h3 className="text-lg font-semibold mb-4">Available Signatories
        </h3>
        
        <ul className="border border-gray-300 rounded-lg h-64 overflow-y-auto flex flex-col gap-2 p-6">
            <p className="text-sm">Addresses imported directly from your Polkadot.js wallet</p>
          {listA.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelectA(item.id)}
              className={`p-2 cursor-pointer hover:bg-blue-100 transition-colors border border-gray-300 rounded-lg ${
                selectedA.includes(item.id) ? "bg-blue-500 text-white" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons to move items */}
      <div className="flex flex-col gap-4 justify-center">
        <Button
          onClick={moveToB}
          disabled={selectedA.length === 0}
          variant="outline"
        >
          &gt;&gt;
        </Button>
 
      </div>

      {/* List B */}
      <div className="w-1/2">
        <h3 className="text-lg font-semibold mb-4">Selected Signatories
        </h3>
        <ul className="border border-gray-300 rounded-lg h-64 overflow-y-auto flex flex-col gap-2 p-6">
          {listB.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelectB(item.id)}
              className={`p-2 cursor-pointer hover:bg-blue-100 transition-colors border border-gray-300 rounded-lg ${
                selectedB.includes(item.id) ? "bg-blue-500 text-white" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
