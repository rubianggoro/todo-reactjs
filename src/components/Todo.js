import React from 'react'


const Todo =({todo, index, removeTodo, editTodo, completeTodo}) => {
    return (
        <div style={{color: todo.isComplete ? "green" : ""}}>
            <h3>{todo.text}
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
            <button onClick={() => editTodo(index)}>Edit</button>
            </h3>
        </div>
    )
}
export default Todo;
