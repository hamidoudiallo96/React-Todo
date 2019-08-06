import React from 'react'
import TodoForm from './TodoForm';

export default function Todo(props) {
    return (
        <div>
            <h1>{props.item.task}</h1>
            
        </div>
    )
}
