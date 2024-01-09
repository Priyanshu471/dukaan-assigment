"use client";
import { HelpCircle } from "lucide-react";

export function PageName() {
  let page = "Payments";

  return (
    <div className="w-1/3 flex gap-4 items-center content-center">
      <p className="text-[#1A181E] text-15 font-normal">{page}</p>
      <div className="flex gap-1.5 items-center content-center cursor-pointer">
        <HelpCircle className="h-4 w-4" />
        <p className="text-4D4D4D text-xs font-normal">How it works</p>
      </div>
    </div>
  );
}
