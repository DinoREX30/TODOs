import { TodoContext } from './TodoContext';
import CreateTodoButton from './components/CreateTodoButtonn'; // Se mantiene CreateTodoButtonn según lo proporcionado
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';
import TodoTittle from './components/TodoTitttle'; // Se mantiene TodoTitttle según lo proporcionado
import PropagateLoader from 'react-spinners/PropagateLoader';

export default function AppUi() {
  return (
    <>
      <h1 className='my-20 text-3xl font-thin bg-black text-white flex justify-center p-4 rounded-lg relative max-w-xl mx-auto'>WELCOME TO MY TODO APP</h1>
      <div className='flex flex-col lg:flex-row xl:flex-row'>
        <section className='first content-center h-90 flex-col'>
          <h1 className='text-center font-thin text-2xl'>Crea una nueva tarea</h1>
          <TodoSearch />
          <CreateTodoButton />
        </section>
        <section className='h-auto'>
          <TodoTittle />
          <TodoContext.Consumer>
            {({ error, searchedTodos, completeTodo, deleteTodo, loading }) => (
              <>
                {loading && searchedTodos.length === 0 ?
                  <div className='flex justify-center'>
                    <PropagateLoader color={'#000000'} loading={loading} size={10} className='' />
                  </div>
                  :
                  <TodoList>
                    {error && <p>Desesperate, hubo un error</p>}
                    {searchedTodos.map(todo => (
                      <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        // Forma de pasarle una funcion a un componente sin ejecutarla
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                      />
                    ))}
                  </TodoList>
                }
              </>
            )}
          </TodoContext.Consumer>
        </section>
      </div>
    </>
  );
}

