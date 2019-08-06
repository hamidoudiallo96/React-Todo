// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'


export default function TodoList(props) {
    console.log(props.todos)
    return (
        <div>
            <ul>
                {props.todos.map(item =>(
                    <Todo key = {item.id} item = {item} toggleCompleted = {props.toggleCompleted} />
                ))}
            </ul>
        </div>
    )
}

