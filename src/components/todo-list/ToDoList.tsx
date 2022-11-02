import { CreateItem } from "./CreateItem";
import { List } from "./List";

export function ToDoList() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl font-bold mt-3 mb-3'>Welcome to the To Do app</h1>
      <CreateItem />
      <div className='mt-3'>
        <h2 className='text-2xl font-bold'>To Do List:</h2>
        <ul>
          <List />
        </ul>
      </div>
    </div>
  );
}
