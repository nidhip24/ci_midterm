import { render, screen, fireEvent } from '@testing-library/react';
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
  
  fireEvent.change(input, { target: { value: 'Test todo' } });
  fireEvent.click(addButton);
  
  const statusButton = screen.getByText('✓');
  fireEvent.click(statusButton);
  
  const todoItem = screen.getByText('Test todo').closest('.todo-item');
  expect(todoItem).toHaveClass('done');
});

test('deletes a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add');
  
  fireEvent.change(input, { target: { value: 'Test todo' } });
  fireEvent.click(addButton);
  
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText('Test todo')).not.toBeInTheDocument();
});

test('edits a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add');
  
  fireEvent.change(input, { target: { value: 'Test todo' } });
  fireEvent.click(addButton);
  
  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);
  
  const editInput = screen.getByDisplayValue('Test todo');
  fireEvent.change(editInput, { target: { value: 'Updated todo' } });
  
  const updateButton = screen.getByText('Update');
  fireEvent.click(updateButton);
  
  expect(screen.getByText('Updated todo')).toBeInTheDocument();
}); 