import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const List = () => {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState("");
  const [editData, setEditData] = useState({ todo: "" });

  useEffect(() => {
    const listData: Array<object> = JSON.parse(localStorage.getItem("ToDos"));

    if (listData !== null) {
      setTodos(listData);
    }
  }, []);

  const deleteTodo = (id: string) => {
    const remainingTodos: Array<string> = todos.filter(
      (todo) => id !== todo.id
    );
    setTodos(remainingTodos);
    updateLocalStorage(remainingTodos);
  };

  const changeEditing = (id: string) => {
    setEditing(() => id);
  };

  const updateTodo = (val: string, id: string) => {
    const index = todos.findIndex((object) => {
      return object.id === id;
    });
    if (index !== -1) {
      todos[index].todo = val;
      updateLocalStorage(todos);
      changeEditing("");
      setEditData({ todo: "" });
    }
  };

  const updateLocalStorage = (todoList: Array<string>) => {
    localStorage.setItem("ToDos", JSON.stringify(todoList));
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className='mt-2'
          >
            {editing === todo.id ? (
              <form onSubmit={() => updateTodo(editData.todo, todo.id)}>
                <div className='flex flex-row justify-between border border-green-600'>
                  <input
                    type='text'
                    className='appearance-none block  border-none w-full text-gray-700 pb-1 focus:outline-none mr-5'
                    placeholder={todo.todo}
                    onChange={(e) =>
                      setEditData({ ...todo.todo, todo: e.target.value })
                    }
                    value={editData.todo}
                    id={todo.id}
                  />
                  <button
                    type='submit'
                    className=' hover:text-green-600'
                  >
                    <FaEdit />
                  </button>
                </div>
              </form>
            ) : (
              <div className='flex flex-row justify-between'>
                <div className='text-lg'>{todo.todo}</div>
                <div>
                  <button
                    className='hover:text-red-600'
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <FaTrash />
                  </button>{" "}
                  |{" "}
                  <button
                    className='hover:text-green-600'
                    onClick={() => changeEditing(todo.id)}
                  >
                    <FaEdit />
                  </button>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </>
  );
};