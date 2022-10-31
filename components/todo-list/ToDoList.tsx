import * as React from 'react';
import { useState } from 'react';
import { Form } from './CreateItem';
import { List } from './List';



export function ToDoList () {
  
  return (
    <div className='container'>
        <h1 className="text-3xl font-bold">
        Welcome to the to do app
        </h1>
        <Form />
        <div className='todo-items'>
            <h2 className="text-2xl font-bold">To Do List:</h2>
            <ul>
                <List />
                
            </ul>
        </div>
    </div>
  );
}
