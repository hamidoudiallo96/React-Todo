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
                    />
                </label>

                <button onClick = {handleSubmit}>Add Todo </button>
                <button onClick ={props.toggleCompleted}>Clear Completed</button>
                
            </form>
        </div>
    )
}
