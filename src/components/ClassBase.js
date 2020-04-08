import React, { Component } from 'react'

class ClassBase extends Component {
    constructor(){
        super()
        this.state = {
            todoList : [],
            todoInput : "",
            isComplete : false,
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
    


    clickDelete = (index) => {
        // console.log("sudah diklik")
        const newtodoInput = [...this.state.todoList];
        // console.log(newtodoInput)
        newtodoInput.splice(index, 1);
        this.setState({todoList :newtodoInput})
    }

    clickEdit = (index) => {
        // console.log("diklik");
        const newtodoInput = [...this.state.todoList];
        const editInput = newtodoInput[index];
        // console.log(editInput)
        const editedInput = prompt(editInput);
        newtodoInput.splice(index, 1, editedInput);
        this.setState({todoList :newtodoInput})
    }

    clickComplete = (index) => {
        // console.log("click")
        const newtodoInput = [...this.state.todoList];
        newtodoInput[index] = !this.state.todoList[index].isComplete;
        
        this.setState({todoList :newtodoInput})
    }





    render () {
        return (
            <div>
                <h1>My Todo List</h1>
                <input type="text" name="todoInput" value={this.state.todoInput} onChange={this.clickChange} />
                <button onClick={this.clickAdd}>Add</button>

                {this.state.todoList.map((item, index) =>(
                    <li key={index} index={index} style={{color: this.state.isComplete ? "green" : ""}}>{item}
                    <button onClick={() => this.clickDelete(index)}>Delete</button>
                    <button onClick={() => this.clickEdit(index)}>Edit</button>
                    <button onClick={() => this.clickComplete(index)}>Complete</button></li>
                ))}
            </div>
        )
    }
}
export default ClassBase;
