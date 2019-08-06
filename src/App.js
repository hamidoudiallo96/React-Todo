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
      ],
      inputValue:{
        task: "",
        id: Date.now(),
        completed: false
      }
    }

    this.toggleCompleted = this.toggleCompleted.bind(this)
    


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
    const newTask = {
      task: this.state.inputValue.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    })
  }
  toggleCompleted (id){
    this.setState({
      todos: this.state.todos.map(item =>{
        if(item.id === id){
          return{
            task : item.task,
            id: item.id,
            completed: !item.completed
        }
      }else{
        return item
      }
    })
      
    })
    console.log(this.state.todos.completed)
  }
  deleteTask = () =>{
    this.setState({
      todos: this.state.todos.filter(item => item.completed === true  )
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        {/* rendering Components */}
        <TodoList todos = {this.state.todos} toggleCompleted = {this.toggleCompleted} />
        <TodoForm inputValue = {this.state.inputValue} setInputValue = {this.setInputValue} handleSubmit = {this.handleSubmit} deleteTask = {this.deleteTask} />
        
      </div>
    );
  }
}

export default App;
