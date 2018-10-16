import React from 'react'

const TodoItem = props =>
  <li className={props.isComplete ? 'completed' : ''}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={props.isComplete} onChange={props.updateTodo}/>
      <label>
        {props.name}
      </label>
      <button className="destroy" onClick={props.onRemove}/>
    </div>
  </li>

export default props =>
  <ul className="todo-list">
    {props.todos.map(todo => <TodoItem key={todo.id} {...todo} onRemove={() => props.onRemove(todo.id)} updateTodo={() => props.updateTodo(todo.id)}/>)}
  </ul>
