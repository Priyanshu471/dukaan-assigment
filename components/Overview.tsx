import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { customIcons } from "./customIcons";

let amounts = {
  onlineOrders: "231",
  amountReceived: "₹23,92,312.19",
};

export function Overview() {
  return (
    <div>
      <Heading />
      <div className="pt-6 flex gap-5">
        <DashboardCard title="Online orders" value={amounts.onlineOrders} />
        <DashboardCard title="Amount received" value={amounts.amountReceived} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex justify-between">
      <p className="text-gray-800  text-xl font-medium">Overview</p>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <div className="text-gray-700 flex gap-2 py-1.5 px-3.5 text-base font-normal leading-6 rounded-md border border-gray-300 bg-white content-center items-center">
              <p>Last Month</p>
              <div className="w-4 h-4">
                <customIcons.downArrow fill="#4D4D4D" width={16} height={16} />
              </div>
            </div>
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
    </div>
  );
}
interface DashboardCardProps {
  title: string;
  value: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value }) => (
  <div className="w-1/2 bg-white p-5 shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] rounded-lg">
    <div className="flex flex-col gap-4 justify-between">
      <p className="text-[#4D4D4D] text-base not-italic font-normal leading-6">
        {title}
      </p>
      <p className="text-gray-900 text-3xl font-medium leading-9">{value}</p>
    </div>
  </div>
);
