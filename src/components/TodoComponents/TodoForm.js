import React from 'react'


export default function TodoForm(props) {
    const{inputValue,setInputValue,handleSubmit} = props
    return (
        <div>
            <form>
                <label>
                    UserInput
                    <input
                        type ="text"
                        name = "task"
                        value = {inputValue.task}
                        onChange = {setInputValue}
                        id = {inputValue.id}
                        
                    />
                </label>

                <button onClick = {handleSubmit}>Add Todo </button>
                
                
            </form>
            <button onClick ={props.deleteTask}>Clear Completed</button>
        </div>
    )
}
