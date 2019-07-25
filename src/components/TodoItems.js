import React, { Component } from 'react';
import todoItemsStyles from "../styles/todoItems.module.css";


const TodoItems = (props) => {
    // destructuring props
    const { individualItem, handleRemoveOneItem} = props
    return (
        <div className={todoItemsStyles.todoItems}>
        {individualItem}
        <button className={todoItemsStyles.removeButton}onClick={ e => {
            handleRemoveOneItem(individualItem)
        }}>Remove</button>
        </div>
    )
}
export default TodoItems;


 