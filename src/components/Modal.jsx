import React from 'react'
import { createPortal } from 'react-dom'
import { TodoContext } from '../TodoContext'

export default function Modal({children}) {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext)

  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onChange = (event) => {
    event.preventDefault();
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }



    return createPortal(
            <form onSubmit={onSubmit} >
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 ">
                      <h3 className="text-3xl font-semibold text-white">
                        Write a TODO
                      </h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <textarea value={newTodoValue} onChange={onChange} placeholder='What do you need to do?' className='bg-black text-white'/>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-white bg-red-600 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md"
                        type="button"
                        onClick={onCancel}
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="text-black bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                {children}
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </form>,      
        document.getElementById('modal')
    )
}