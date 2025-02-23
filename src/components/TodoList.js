import React from 'react';
import TodoForm from './TodoForm';

function TodoList({ todos, onUpdate, onDelete, onToggle, onStartEdit, editingId, editingText, onEditChange }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={editingText}
                onChange={(e) => onEditChange(e.target.value)}
              />
              <button onClick={onUpdate}>Update</button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button 
                onClick={() => onToggle(todo.id)}
                data-testid={`toggle-${todo.id}`}
              >
                ✓
              </button>
              <button 
                onClick={() => onStartEdit(todo)}
                data-testid={`edit-${todo.id}`}
              >
                Edit
              </button>
              <button 
                onClick={() => onDelete(todo.id)}
                data-testid={`delete-${todo.id}`}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList; 