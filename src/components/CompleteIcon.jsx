import { MdDone } from "react-icons/md";

export default function CompleteIcon({done, onClick}) {
    const iconSelected = done ? <MdDone/> : <MdDone/>
    return (
        <span
        className="cursor-pointer hover:text-green-500 text-2xl flex items-center"
        onClick={onClick}>
            {iconSelected}
        </span>
    )
}
