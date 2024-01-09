import Image from "next/image";
import { storeInfoData } from "./Navbar";
import Link from "next/link";
import { customIcons } from "../customIcons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function StoreInfo() {
  return (
    <div className="flex justify-normal items-center w-full gap-3 pl-1.5">
      <Image
        src={storeInfoData.logo}
        alt=""
        width={40}
        height={40}
        className="rounded w-10 h-10"
      />
      <div className="w-[108px] ">
        <p className="text-sm font-medium ">{storeInfoData.name}</p>
        <Link
          href={storeInfoData.link}
          className={"text-xs underline font-normal opacity-80"}
        >
          Visit Store
        </Link>
      </div>{" "}
      <div className=""> </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <customIcons.downArrow height={20} width={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
