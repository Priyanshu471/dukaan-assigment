import { Overview } from "../components/Overview";
import { customIcons } from "@/components/customIcons";
import { RecordsTable } from "../components/RecordsTable";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="w-full px-8 pt-9 ">
      <Overview />
      <Suspense
        fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}
      >
        <RecordsTable />
      </Suspense>
    </div>
  );
}
