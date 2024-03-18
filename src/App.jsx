import React from 'react'
import './App.css'
import AppUi from './AppUi'


// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false },
//   { text: 'Comprar tomate', completed: true },
//   { text: 'Cortarse el cabello', completed: false },
//   { text: 'Alimetar a Rowley', completed: true },
//   { text: 'Jugar WZ', completed: false },
//   { text: 'Ir a clase de baile', completed: false }
// ] 

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
//localStorage.removeItem('TODOS_V1')
function useLocalStorage (itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

function App() {
  

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue,setSearchValue] = React.useState('')


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) =>  {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }
  )


    const completeTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      )
      newTodos[todoIndex].completed = true
      saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      )
      newTodos.splice(todoIndex,1)
      saveTodos(newTodos)
  }


  return (
    <AppUi
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}


export default App
