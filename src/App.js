import React from 'react';
import Todo from './components/TodoComponents/Todo'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props)

    // state Values
    this.state ={
      todos:[
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      inputValue:{
        task: "",
        id: Date.now(),
        completed: false
      }
    }

    
    


  }
  // handlerFunctions
  setInputValue = (e) =>{
      e.preventDefault()
      this.setState({
        inputValue: {...this.state.inputValue,[e.target.name]:e.target.value}
      })
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.inputValue]
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        {/* rendering Components */}
        <TodoList todos = {this.state.todos} />
        <TodoForm inputValue = {this.state.inputValue} setInputValue = {this.setInputValue} handleSubmit = {this.handleSubmit} />
        
      </div>
    );
  }
}

export default App;
