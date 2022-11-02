import { useState } from "react";

export const dataArray: Array<object> = [];
export const Form = () => {
  const initialState: { id: string; todo: string } = {
    id: "",
    todo: "",
  };
  const [createData, setCreateData] = useState(initialState);

  const createToDo = () => {
    if (createData === initialState) {
      return alert("Please Enter a To Do Item");
    } else {
      createData.id = new Date().toUTCString();
      let newLocal: string = window.localStorage.getItem("ToDos");
      let newArray: Array<object> = JSON.parse(newLocal);
      if (newArray == null) {
        dataArray.push(createData);
      } else {
        dataArray.push(...newArray, createData);
      }
      window.localStorage.setItem("ToDos", JSON.stringify(dataArray));
    }
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
          onChange={(e) =>
            setCreateData({ ...createData, todo: e.target.value })
          }
          value={createData.todo}
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
