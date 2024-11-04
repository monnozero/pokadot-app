"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import AddIcon from "@/assets/AddIcon";
import SenTokenModal from "@/app/(pages)/dashboard/SenTokenModal";

const TransactionDropDown = () => {
  const [position, setPosition] = React.useState("bottom");
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [contentWidth, setContentWidth] = React.useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  React.useEffect(() => {
    if (triggerRef.current) {
      setContentWidth(triggerRef.current.offsetWidth);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          ref={triggerRef}
          className="flex items-center justify-center gap-2"
        >
          <AddIcon />
          <p>New Transaction</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        style={{ width: contentWidth ? `${contentWidth}px` : "auto" }}
      >
        
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuItem onSelect={() => setIsDialogOpen(true)}>
            Send Token
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
      <SenTokenModal
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </DropdownMenu>
  );
};

export default TransactionDropDown;
