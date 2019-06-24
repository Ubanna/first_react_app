import React, { Component } from 'react';
import TodoItems from './TodoItems';
import Header from './Header';



// ...
class Todo extends Component {
    state = {
        todoItems:['sleep', 'eat', 'work'],
        newTodo: ""
    }
    handleChange = (e) => {
        this.setState({newTodo:e.target.value});
    }
    render(){
        return (
            <div>
            <Header title="MY TODO TITLE"/>
            <h1>Welcome to my todo App</h1>
            <TodoItems />
           {
               this.state.todoItems.map(item => (<TodoItems individualItem = {item}/>))
               }
            <form>
                <label htmlFor="todo-item">Todo Items</label> <br />
                <input type="text" name="todo-item" value={this.state.newTodo} onChange={this.handleChange} /> <br />
                <button>Submit</button>
            </form>
            </div>
        )
    }

}
export default Todo;

// ...
 