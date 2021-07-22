import React, { useState } from 'react';
import './styles/style.css'
import { TodoContainer } from './components/TodoContainer';

const initialTodos: Array<Todo> = [];

const App: React.FC = () => {

  const [todos, setTodos] = useState(initialTodos);

  // const toggleTodo: ToggleTodo = selectedTodo => {
  //   const newTodos = todos.map(todo => {
  //     if (todo === selectedTodo)
  //   })
  // }



  return (
    <div className="App">
      <TodoContainer />
    </div>
  );


}

export default App;
