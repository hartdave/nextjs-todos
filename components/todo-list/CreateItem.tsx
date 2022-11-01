import { useState } from 'react';

export const dataArray: Array<object> = [];
export const Form = () => {
    
    const initialState: {id: string, todo: string} = {
        id: "",
        todo: "",
    }
    const [createData, setCreateData] = useState(initialState);
    
    const createToDo = () => {
        if (createData  === initialState) {
            return alert("Please Enter a To Do Item");
        } else {
            createData.id = new Date().toUTCString();
            let newLocal: string = window.localStorage.getItem("ToDos");
            let newArray: Array<object> = JSON.parse(newLocal);
            if (newArray == null) {
                dataArray.push(createData);
            } else {
            dataArray.push(...newArray, createData);
            };
            window.localStorage.setItem("ToDos", JSON.stringify(dataArray));
            
        }
    }

    return (
        
        <form className='todo-form' id="todo-form" onSubmit={createToDo}>
            <input type="text" className="todo-input" placeholder='Add a to do item' onChange={(e) => setCreateData({ ...createData, todo: e.target.value })} value={createData.todo} />
            <button type="submit" className='add-button' id="todo-submit">Add</button>
        </form>
    );
};