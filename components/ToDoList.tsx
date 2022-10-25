import * as React from 'react';

if (typeof window !== 'undefined') {
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoSubmit = document.getElementById('todo-submit');
const todoList = document.getElementById('todo-list');

const deleteItem = (btn) => {
    let elem = btn.parentNode;
    const index = [...elem.parentElement.children].indexOf(elem);
    todoStorage.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoStorage));
    elem.remove();
};

const buildList = (text) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = 
        `<div className='item-description'>` +
            text +
        '</div><div className="item-button-group"><button className="edit-button">Edit</button> | <button onclick="deleteItem(this)">Delete</button></div>';
    todoList.appendChild(listItem)
};

let todoStorage = localStorage.getItem('todo-item')
    ? JSON.parse(localStorage.getItem('todo-item')): [];

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    todoStorage.push(todoInput.value);
    localStorage.setItem('todo-item', JSON.stringify(todoStorage));
    buildList(todoInput.value);
    todoInput.value = "";
});


};






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
                        <button className="edit-button">Edit</button> | <button className='delete-button'>Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
}
