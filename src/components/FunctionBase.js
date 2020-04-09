import React, { useState} from 'react'
import Todo from './Todo'

import 'bootstrap/dist/css/bootstrap.min.css';


const FunctionBase = () => {
    const [todos, setTodos] = useState ([
        {text : "", isComplete: false},
    ])

    const [value, setValue] = useState("");
    // console.log("value", value)

    // handel change input
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // handle submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("isi Value", value);
        const newTodos = [...todos, {text: value}]
        console.log("new todos", newTodos);
        setTodos(newTodos);
        setValue("");
    }

    // handle remove button
    const removeTodo = (index) => {
        // console.log("sudah clik");
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    // handle edit button
    const editTodo = (index) => {
        // console.log("udh diclik");
        const newTodos = [...todos];
        const editTodos = newTodos[index].text;
        // console.log(editTodos);
        const editedTodo = prompt(editTodos);
        newTodos.splice(index, 1, {text: editedTodo});
        setTodos(newTodos);
    }

    // Complete button
    const completeTodo = (index) => {
        // console.log("klick")
        const newTodos = [...todos];
        newTodos[index].isComplete = !todos[index].isComplete;
        setTodos(newTodos)
    }



    return (
        <div>
            <h1 className="text-primary mt-5">Todo With FunctionBase</h1>

            <form onSubmit={handleSubmit}>
                <input className="border border-primary" type="text" value={value} onChange={handleChange}/>
                <input className="ml-3 rounded bg-primary text-white border-white" type="submit"/>
            </form>

            {todos.map((todo, index) => (
                <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} editTodo={editTodo} completeTodo={completeTodo}/>
            ))}
        </div>
    )
}

export default FunctionBase
