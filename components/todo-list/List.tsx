import { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';



export const List = () => {
    const [ todos, setTodos] = useState([]);
    const [ editing, setEditing] = useState("");
    const [ editData, setEditData] = useState({todo: ""})

    useEffect(() => {
        const listData = JSON.parse(localStorage.getItem('ToDos'));
      
        if (listData !== null) {
          setTodos(listData);
        }
      }, []);
    
      const deleteTodo = (id: string) => {
        const remainingTodos = todos.filter(todo => id !== todo.id);
        setTodos(remainingTodos);
        updateLocalStorage(remainingTodos);
      }

      const changeEditing = (id) => {
        setEditing(() => id);
        };

      const updateTodo = (val, id) => {
        const index = todos.findIndex(object => {
            return object.id === id;
        });
        if (index !== -1) {
            todos[index].todo = val;
            updateLocalStorage(todos);
            changeEditing("");
            setEditData({todo: ""});
        }
      }
      
      const updateLocalStorage = (todoList) => {
        localStorage.setItem('ToDos', JSON.stringify(todoList));
      };

    return (
        <>  
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        <div>
                            {editing === todo.id ? 
                                 <form onSubmit={() => updateTodo(editData.todo, todo.id)} id={todo.id}>
                                    <input type="text" className="todo-input" placeholder="" onChange={(e) => setEditData({ ...todo.todo, todo: e.target.value })} value={editData.todo} />
                                    <button type='submit'className='edit-button'>Submit</button>
                                </form>:
                                <div>{todo.todo}</div>
                            }

                        </div>
                        <div>
                            <button className='edit-button'onClick={() => changeEditing(todo.id)}><FaEdit /></button> | <button className='delete-button' onClick={() => deleteTodo(todo.id)}><FaTrash /></button>
                        </div>
                    </li>
                )
            })}
                

                
            
        </>
    )
};