import {Form, List} from '../'



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
