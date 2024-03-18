import PopAllCompleted from "./PopAllCompleted";

export default function TodoTitttle({ total, completed }) {
  return (
    total === completed ?
      <>
        <PopAllCompleted/>
        <h1 className="text-4xl mb-10 m-4 text-center font-thin">Has completado {completed} de {total} TODOS</h1>
      </>

      :

      <h1 className="text-4xl mb-10 m-4 text-center font-thin">Has completado {completed} de {total} TODOS</h1>
  )
}
