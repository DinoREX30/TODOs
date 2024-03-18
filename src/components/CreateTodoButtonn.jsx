export default function CreateTodoButtonn() {
  return (
    <>
    <div className="flex justify-center font-thin">
        <button className="rounded-md w-20 bg-black text-white justify-center" 
        onClick={
          (event) => {
            console.log('le diste click')
            console.log(event.target)
          }
        }
        >+</button>
    </div>
    </>
  )
}
