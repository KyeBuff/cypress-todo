import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import {loadTodos, saveToDo, deleteTodo, updateTodo} from '../lib/service.js';
import {filterTodos} from '../lib/utils.js';

export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentToDo: '',
      todos: [], 
      error: false,
      todoListError: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount() {
    loadTodos()
      .then(({data}) => this.setState({todos: data}))
      .catch(error => this.setState({todoListError: true}));
  }

  handleChange(e) {
    this.setState({currentToDo: e.target.value});
  }

  onRemove(id) {
    deleteTodo(id)
      .then(() => this.setState({todos: this.state.todos.filter(t => t.id !== id)}))
  }

  updateTodo(id) {
    const targetItem = this.state.todos.find(t => t.id === id);
    const updated = {
      ...targetItem,
      isComplete: true
    };
    updateTodo(updated)
      .then(({data}) => this.setState({todos: this.state.todos.map(t => t.id === id ? data : t)}))
  }

  onSubmit(e) {
    e.preventDefault();
    const newTodo = {name: this.state.currentToDo, isComplete: false};
    saveToDo(newTodo)
      .then(({data}) => this.setState({todos: this.state.todos.concat(data), currentToDo: ''}))
      .catch(error => this.setState({error: true}));
  }

  render () {
    const remaining = this.state.todos.filter(todo => !todo.isComplete).length;
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <TodoForm 
              currentToDo={this.state.currentToDo}
              onChange={this.handleChange}
              onSubmit={this.onSubmit}
            />
            {this.state.error ? <p className="error-message">Unable to submit form</p> : null}
          </header>
          <section className="main">
            {this.state.todoListError ? <p className="error">Unable to get todos.</p> : null}
            <Route path="/:filter?" render={({match}) => (
              <TodoList 
                todos={filterTodos(match.params.filter,this.state.todos)} 
                onRemove={this.onRemove} 
                pdateTodo={this.updateTodo}
              />
            )} />
          </section>
          <Footer todosCount={remaining}/>
        </div>
      </Router>
    )
  }
}
