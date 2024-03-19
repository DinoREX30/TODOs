export default function TodoTitttle({ total, completed }) {
  return (
      <h1 className="text-4xl mb-10 m-4 text-center font-thin">Has completado {completed} de {total} TODOS</h1>
  )
}
