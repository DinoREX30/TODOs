import React from "react";
import { TodoContext } from "../TodoContext";

export default function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

  return (
    <>
    <div className="flex justify-center font-thin">
        <input type="text" placeholder="Search TODO" className="px-4 py-2 border border-black rounded-lg text-center bg-black text-white shadow-xl" 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}/>
    </div>
    </>
  )
}
