export default function TodoList(props) {
  return (
    <>
    <ul className="mb-8 text-center">
        {props.children}
    </ul>
    </>
  )
}
