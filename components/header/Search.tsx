"use client";
import { customIcons } from "../customIcons";

import React, { useState } from "react";

export function Search() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value);
    // Additional logic can be added here
  };

  return (
    <div className="w-1/3 rounded-md bg-gray-100 flex p-2 items-center gap-8 flex-shrink-0 self-stretch">
      <div className="flex gap-2 items-center">
        <customIcons.search />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-transparent outline-none text-sm font-normal text-gray-500"
          value={query}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
