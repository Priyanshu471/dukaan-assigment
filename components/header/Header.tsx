import { PageName } from "./PageName";

import { Search } from "./Search";
import { customIcons } from "../customIcons";
export function Header() {
  return (
    <header className="w-full bg-white px-8 py-4 flex gap-4 border-b border-gray-300 overflow-hidden z-50 top-0 sticky">
      <PageName />
      <Search />
      <div className="w-1/3 ">
        <div className="flex w-full justify-end content-center items-center gap-4">
          <div className="cursor-pointer">
            {" "}
            <customIcons.chat />
          </div>
          <div className="cursor-pointer">
            {" "}
            <customIcons.menu />
          </div>
        </div>
      </div>
    </header>
  );
}
