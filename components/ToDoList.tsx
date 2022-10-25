import * as React from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa';



export function ToDoList () {
  return (
    <div className='container'>
        <h1 className="text-3xl font-bold">
        Welcome to the to do app
        </h1>
        <form className='todo-form' id="todo-form">
            <input type="text" className="todo-input" id="todo-input" placeholder='Add a to do item' />
            <button type="submit" className='add-button' id="todo-submit">Add</button>
        </form>
        <div className='todo-items'>
            <h2 className="text-2xl font-bold">To Do List:</h2>
            <ul id="todo-list">
                <li>
                    <div className='item-description'>
                        Test item
                    </div>
                    <div className='item-button-group'>
                        <button className="edit-button"><FaEdit /></button> | <button className='delete-button'><FaTrash /></button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
}
