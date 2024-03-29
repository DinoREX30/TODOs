export default function CreateTodoButtonn({setOpenModal}) {
  return (
    <>
    <div className="flex justify-center font-thin">
        <button className="rounded-md w-20 bg-black text-white justify-center" 
        onClick={
          () => {
            setOpenModal(true)
          }
        }
        >+</button>
    </div>
    </>
  )
}
