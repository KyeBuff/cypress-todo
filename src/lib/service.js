import axios from 'axios';

export const saveToDo = toDo =>
	axios.post('http://localhost:3030/api/todos', toDo);

export const loadTodos = () =>
	axios.get('http://localhost:3030/api/todos');

export const deleteTodo = id =>
	axios.delete('http://localhost:3030/api/todos/'+id);

export const updateTodo = todo =>
	axios.put('http://localhost:3030/api/todos/'+todo.id, todo);