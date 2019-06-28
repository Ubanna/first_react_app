import React, { Component } from 'react';
import TodoItems from './TodoItems';
import Header from './Header';



// ...
class Todo extends Component {
    state = {
        todoItems:[ ],
        newTodo: ""
    }
    handleChange = (e) => {
        this.setState({newTodo:e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
       this.setState(prevState => {
        //    let todoItems = this.state.todoItems.concat(this.state.newTodo);
           return {
               todoItems: [...prevState.todoItems, this.state.newTodo],
            //    todoItems,
               newTodo: ''
           
           }
           
       })
       console.log(this.state.todoItems)
       

    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevState.todoItems.length !== this.state.todoItems.length){
          const jsonState = JSON.stringify(this.state.todoItems)
          localStorage.setItem("todoItems", jsonState)
        }
    }

    componentDidMount(){
        const itemsFromLocalStorage = localStorage.getItem("todoItems");
        const todoItems = JSON.parse(itemsFromLocalStorage)
        if(todoItems){
            this.setState(() => ({
                todoItems
            }))
    
        }
        
        }
    

    render(){
        console.log(localStorage.getItem("todoItems"))
        return (
            <div>
            <Header title="MY TODO TITLE"/>
            <h1>Welcome to my todo App</h1>
            <TodoItems />
           {
               this.state.todoItems.map(item => (<TodoItems individualItem = {item}/>))
               }
            <form onSubmit={this.handleSubmit}>
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
 