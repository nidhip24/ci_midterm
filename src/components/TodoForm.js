import React, { useState } from 'react';

function TodoForm({ onSubmit, initialValue = '', isEdit = false }) {
  const [title, setTitle] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onSubmit({
      title,
      status: 'in-progress',
      completed: false
    });
    
    if (!isEdit) {
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        {isEdit ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default TodoForm; 