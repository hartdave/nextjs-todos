import { useState, useEffect } from 'react';

export const dataArray = [];
export const Form = () => {
    
    const initialState = {
        id: "",
        todo: "",
    }
    const [formData, setFormData] = useState(initialState);
    
    const createToDo = () => {
        if (formData  === initialState) {
            return alert("Please Enter a To Do Item");
        } else {
            formData.id = new Date().toUTCString();
            let newLocal = window.localStorage.getItem("ToDos");
            let newArray = JSON.parse(newLocal);
            if (newArray == null) {
                dataArray.push(formData);
            } else {
            dataArray.push(...newArray, formData);
            };
            window.localStorage.setItem("ToDos", JSON.stringify(dataArray));
            
        }
    }

    return (
        
        <form className='todo-form' id="todo-form" onSubmit={createToDo}>
            <input type="text" className="todo-input" placeholder='Add a to do item' onChange={(e) => setFormData({ ...formData, todo: e.target.value })} value={formData.todo} />
            <button type="submit" className='add-button' id="todo-submit">Add</button>
        </form>
    );
};