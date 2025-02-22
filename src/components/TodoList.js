import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList({ todos, onUpdate, onDelete }) {
  const [editId, setEditId] = useState(null);

  const handleStatusChange = (todo) => {
    onUpdate(todo.id, {
      ...todo,
      status: todo.status === 'in-progress' ? 'done' : 'in-progress'
    });
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
  };

  const handleUpdate = (updatedTodo) => {
    onUpdate(editId, updatedTodo);
    setEditId(null);
  };

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div key={todo.id} className={`todo-item ${todo.status}`}>
          {editId === todo.id ? (
            <TodoForm
              onSubmit={handleUpdate}
              initialValue={todo.title}
              isEdit={true}
            />
          ) : (
            <>
              <span className="todo-title">{todo.title}</span>
              <div className="todo-actions">
                <button 
                  onClick={() => handleStatusChange(todo)}
                  className="status-button"
                >
                  {todo.status === 'in-progress' ? '✓' : '↻'}
                </button>
                <button 
                  onClick={() => handleEdit(todo)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(todo.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList; 