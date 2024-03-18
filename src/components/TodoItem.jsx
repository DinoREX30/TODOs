import CompleteIcon from "./CompleteIcon"
import DeleteIcon from "./DeleteIcon"

export default function TodoItem(props) {
  return (
    <li className="flex gap-60 justify-between font-thin w-full text-xl mt-4 border rounded-lg mb-8 p-2 bg-white shadow-xl">
      <CompleteIcon onClick={props.onComplete}/>
      <p className={`TodoItem-p ${props.completed&&"TodoItem-p-complete"}`}>{props.text}</p>
      <DeleteIcon onClick={props.onDelete}/>
  </li>
  )
}
