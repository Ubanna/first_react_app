import React, { Component } from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import todoStyles from "../styles/todo.module.css";



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
        const duplicateItem = this.state.todoItems.filter(todoItem => 
            {
                if (isNaN(todoItem)) {
                    return todoItem.toUpperCase () === this.state.newTodo.toUpperCase();
                } else {
                    return todoItem === this.state.newTodo;
                }
            })

            if (this.state.newTodo && duplicateItem.length== 0){
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
        handleRemoveOneItem = itemToBeRemoved => {
            this.setState(prevState => ({
                todoItems: prevState.todoItems.filter(
                    todoItem => todoItem != itemToBeRemoved
                )
            }))
        }

        clearAll =()=> {
            this.setState((prevState) => {
                return {
                    todoItems:[]
                }
            })}
             
        
    

    render(){
        console.log(localStorage.getItem("todoItems"))
        // destructuring props
        const {todoItems, newTodo } = this.state
        return (
            <div className={todoStyles.container}>
            <Header title="MY TODO APP"/>
            <h1 className={todoStyles.title}>Welcome to my Todo App</h1>
            <div className={todoStyles.wrapper}>
            <div className={todoStyles.forms}>
            <form onSubmit={this.handleSubmit}>
                {/* <label htmlFor="todo-item">Todo Items</label> <br /> */}
                <input type="text" name="todo-item" value={newTodo} onChange={this.handleChange} /> <br />
                <button>Submit</button>   
            </form>
            </div>
            <div className={todoStyles.cover}>
            <button className={todoStyles.removeAllButton} style={{display: todoItems.length==0? "none": "block"}} onClick={this.clearAll}>Remove All</button>
            {
               todoItems.map(item => (<TodoItems key={item} handleRemoveOneItem={this.handleRemoveOneItem} individualItem = {item} />))
               }
            </div>
            </div>
            </div>
        )
    }

}
export default Todo;

// ...
 