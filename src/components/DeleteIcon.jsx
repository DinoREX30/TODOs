import { RiDeleteBin2Line } from "react-icons/ri";


export default function DeleteIcon({onClick}) {
  return (
    <span
    className="cursor-pointer hover:text-red-500 text-2xl flex items-center"
    onClick={onClick}
    >
        <RiDeleteBin2Line/>
    </span>
  )
}
