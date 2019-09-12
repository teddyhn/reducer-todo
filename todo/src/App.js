import React from 'react';
import TodosForm from './components/TodosForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodosForm />
      <div className="App-header">
        <h1>Todo App with Reducer</h1>
      </div>
    </div>
  );
}

export default App;
