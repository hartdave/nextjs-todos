import { useState, DOMAttributes } from "react";
import { ToDoItem } from "../../types/main";
import { useToDos } from "./todo-context";

export const CreateItem = () => {
  const [value, setValue] = useState<string>();
  const { todos, pushToDo } = useToDos();

  const createToDo: DOMAttributes<HTMLFormElement>["onSubmit"] = (e) => {
    e.preventDefault();
    const id = new Date().toUTCString();
    const newItem: ToDoItem = {
      id: id,
      todo: value,
    };
    pushToDo(newItem);
    setValue("");
  };

  return (
    <form
      className='todo-form'
      id='todo-form'
      onSubmit={createToDo}
    >
      <div className='flex flex-row justify-between border-b border-green-500 px-1 py-2'>
        <input
          type='text'
          className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none'
          placeholder='Add a to do item'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          type='submit'
          className='flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded'
          id='todo-submit'
        >
          Add
        </button>
      </div>
    </form>
  );
};
