import CreateTodoButton from './components/CreateTodoButtonn'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'
import TodoTittle from './components/TodoTitttle'

export default function AppUi({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    
}) {
  return (
    <>
    <div className='flex h-screen flex-col lg:flex-row xl:flex-row'>
      <section className='first content-center h-90 flex-col'>
        <h1 className='text-center font-thin text-2xl'>Crea una nueva tarea</h1>
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue} 
        />
        <CreateTodoButton/>
      </section>
      <section className='h-auto'>
      <TodoTittle completed={completedTodos} total={totalTodos}/>
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            //Forma de pasarle una funcion a un componete sin ejecutarla
            onComplete={() =>  completeTodo(todo.text)}
            onDelete={() =>  deleteTodo(todo.text)}
          />
          ))}
        </TodoList>
      </section>
    </div>
    </>
  )
}
