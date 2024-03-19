export default function TodoSearch({searchValue, setSearchValue}) {

  return (
    <>
    <div className="flex justify-center font-thin">
        <input type="text" placeholder="Nuevo TODO" className="px-4 py-2 border border-black rounded-lg text-center bg-black text-white shadow-xl" 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}/>
    </div>
    </>
  )
}
