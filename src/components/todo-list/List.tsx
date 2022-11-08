import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useToDos } from "./todo-context";

export const List = () => {
  const { todos, deleteTodo, updateLocalStorage } = useToDos();
  const [editing, setEditing] = useState("");
  const [editData, setEditData] = useState({ todo: "" });

  const changeEditing = (id: string) => {
    setEditing(() => id);
  };

  const updateTodo = (val: string, id: string) => {
    const index = todos.findIndex((object) => {
      return object.id === id;
    });
    if (index !== -1) {
      todos[index].todo = val;
      changeEditing("");
      setEditData({ todo: "" });
      updateLocalStorage(todos);
    }
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
              <form onSubmit={() => updateTodo(todo.todo, todo.id)}>
                <div className='flex flex-row justify-between border border-green-600'>
                  <input
                    type='text'
                    className='appearance-none block  border-none w-full text-gray-700 pb-1 focus:outline-none mr-5'
                    placeholder={todo.todo}
                    onChange={(e) =>
                      setEditData({ ...todo, todo: e.target.value })
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
