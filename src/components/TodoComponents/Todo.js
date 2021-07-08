import React from 'react'
import './Todo.css'

export default function Todo(props) {
    const show = ` task${props.item.completed ? ' completed' : ''}`
    return (
        <div  onClick = {() =>props.toggleCompleted(props.item.id)}>
            <h1 className={show}>{props.item.task}</h1>
        </div>
    )
}
