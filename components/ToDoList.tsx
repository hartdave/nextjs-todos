import * as React from 'react';

export interface IAppProps {
}

export function ToDoList (props: IAppProps) {
  return (
    <div className='container'>
        <h1 className="text-3xl font-bold">
        Welcome to the to do app
        </h1>
        <form className='todo-form'>
            <input type="text" className="todo-input" placeholder='Add a to do item' />
            <button type="submit" className='add-button'>Add</button>
        </form>
        <div className='todo-items'>
            <h2 className="text-2xl font-bold">To Do List:</h2>
            <ul>
                <li className='item' uid='9999999999999'>
                    <div className='item-description'>
                        Test item
                    </div>
                    <div className='item-button-group'>
                        <button className="edit-button">Edit</button> | <button className='delete-button'>Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
}
