import React from "react"
import { TodoContext } from "../TodoContext"

export default function TodoTitttle() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
  return (
      <h1 className="text-4xl mb-10 m-4 text-center font-thin">Has completado {completedTodos} de {totalTodos} TODOS</h1>
  )
}
