import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { SearchBar } from "./SearchBar";

export const Navbar = ({ SearchInput, setSearchInput, setShowMovie }) => {
  const [ClickSearch, setClickSearch] = useState(false);

  const handleClickSearch = () => {
    setClickSearch(!ClickSearch);
  };

  const handleLogout = () => {
    CookiesStorage.remove(CookiesKey.AuthToken);
    window.location.href = "/";
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center m-[1rem]">
          <div className="text-[2rem] font-extrabold text-red-600">
            Movielist
          </div>
          <div className="hidden tablet:flex">
            <SearchBar
              SearchInput={SearchInput}
              setSearchInput={setSearchInput}
              setShowMovie={setShowMovie}
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleClickSearch}
              className="flex items-center justify-center tablet:hidden border-2 border-red-600 px-3 py-1 rounded-3xl"
            >
              <GoSearch color="gray" size={18} />
            </button>
            <div className="bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white hover:border-red-400 hover:bg-red-400">
              <button onClick={handleLogout} className="w-full h-full">
                Logout
              </button>
            </div>
          </div>
        </div>

        {ClickSearch ? (
          <div className="flex tablet:hidden px-[1rem]">
            <SearchBar
              SearchInput={SearchInput}
              setSearchInput={setSearchInput}
              setShowMovie={setShowMovie}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
