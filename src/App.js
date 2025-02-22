import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, ...updatedTodo } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList 
        todos={todos} 
        onUpdate={updateTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App; 