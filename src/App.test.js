import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('adds a new todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add');
  
  fireEvent.change(input, { target: { value: 'Test todo' } });
  fireEvent.click(button);
  
  expect(screen.getByText('Test todo')).toBeInTheDocument();
});

test('marks todo as done', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add');
  
  const uniqueTodoText = 'Toggle Test Todo ' + Date.now();
  fireEvent.change(input, { target: { value: uniqueTodoText } });
  fireEvent.click(addButton);
  
  const todoElement = screen.getByText(uniqueTodoText);
  const todoItem = todoElement.closest('.todo-item');
  const toggleButton = todoItem.querySelector(`[data-testid^="toggle-"]`);
  fireEvent.click(toggleButton);
  
  expect(todoItem).toHaveClass('done');
});

test('deletes a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add');
  
  const uniqueTodoText = 'Delete Test Todo ' + Date.now();
  fireEvent.change(input, { target: { value: uniqueTodoText } });
  fireEvent.click(addButton);
  
  const todoElement = screen.getByText(uniqueTodoText);
  const todoItem = todoElement.closest('.todo-item');
  const deleteButton = todoItem.querySelector('button:last-child');
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText(uniqueTodoText)).not.toBeInTheDocument();
});

test('edits a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add');
  
  const uniqueTodoText = 'Edit Test Todo ' + Date.now();
  fireEvent.change(input, { target: { value: uniqueTodoText } });
  fireEvent.click(addButton);
  
  const todoElement = screen.getByText(uniqueTodoText);
  const todoItem = todoElement.closest('.todo-item');
  const editButton = todoItem.querySelector(`[data-testid^="edit-"]`);
  fireEvent.click(editButton);
  
  const editInput = screen.getByDisplayValue(uniqueTodoText);
  fireEvent.change(editInput, { target: { value: 'Updated todo' } });
  
  const updateButton = screen.getByText('Update');
  fireEvent.click(updateButton);
  
  expect(screen.getByText('Updated todo')).toBeInTheDocument();
}); 