import React from 'react'

export default props =>
  <form onSubmit={props.onSubmit}>
    <input
      type='text'
      autoFocus
      className="new-todo"
      placeholder="What needs to be done?"
      value={props.currentToDo}
      onChange={props.onChange}/>
  </form>
