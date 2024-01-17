import React from "react";
import { GoSearch } from "react-icons/go";

export const SearchBar = ({SearchInput, setSearchInput, setShowMovie}) => {
    const handleSearch = (e) => {
        setShowMovie(!e.target.value);
        setSearchInput(e.target.value);
      };

  return (
    <div>
      <div className="flex justify-between items-center w-[22rem] tablet:w-[25rem] desktop:w-[30rem] rounded-3xl border-2 border-red-600">
        <input
          placeholder="What do you want to watch?"
          className="focus:outline-none px-5 py-1 bg-transparent w-full focus:text-slate-300"
          value={SearchInput}
          onChange={handleSearch}
        />
        <div className="hidden tablet:flex mr-4">
          <GoSearch color="gray" size={18} />
        </div>
      </div>
    </div>
  );
};
