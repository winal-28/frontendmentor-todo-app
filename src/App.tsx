import React from 'react';
import './styles/style.css'
import { TodoContainer } from './components/TodoContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoContainer />
    </div>
  );
}

export default App;
