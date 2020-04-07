import React, { Component } from 'react'

class ClassBase extends Component {
    constructor(){
        super()
        this.state = {
            todoList : [],
            todoInput : ""
        }
    }

    clickChange = (event) => {
        // console.log("CLICKCHANGE", event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clickAdd = () => {
        this.setState({
            todoList: [...this.state.todoList, this.state.todoInput],
            todoInput: ""
        })
    }
    


    clickDelete = () => {
        this.setState({
            todoList: []
        })
    }





    render () {
        return (
            <div>
                <h1>My Todo List</h1>
                <input type="text" name="todoInput" value={this.state.todoInput} onChange={this.clickChange} />
                <button onClick={this.clickAdd}>Add</button>

                {this.state.todoList.map((item, index) =>(
                    <li key={index}>{item}
                    <button onClick={this.clickDelete}>Delete</button>
                    <button>Edit</button></li>
                ))}
            </div>
        )
    }
}
export default ClassBase;
