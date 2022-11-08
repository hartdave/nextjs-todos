import {
  createContext,
  PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from "react";
import { ToDoItem } from "../../types/main";

type ToDosContextState = [ToDoItem[], Dispatch<SetStateAction<ToDoItem[]>>];
const ToDosContext = createContext<ToDosContextState>([[], (state) => state]);
export function useToDos() {
  const [todos, setToDos] = useContext(ToDosContext);

  const updateLocalStorage = (val) => {
    window.localStorage.setItem("ToDos", JSON.stringify(val));
  };

  const pushToDo = (todo: ToDoItem) => {
    setToDos((todos) => {
      const newTodos = [...todos, todo];
      window.localStorage.setItem("ToDos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const deleteTodo = (id: string) => {
    const remainingTodos = todos.filter((todo) => id !== todo.id);
    setToDos(remainingTodos);
    updateLocalStorage(remainingTodos);
  };
  return {
    todos,
    pushToDo,
    deleteTodo,
    updateLocalStorage,
  };
}
export function ToDosContextProvider({ children }: PropsWithChildren) {
  const [todos, setToDos] = useState<Array<ToDoItem>>([]);

  useEffect(() => {
    let localList = JSON.parse(window.localStorage.getItem("ToDos"));
    if (localList) {
      setToDos(localList);
      console.log(localList);
      console.log(todos);
    }
  }, []);

  return (
    <ToDosContext.Provider value={[todos, setToDos]}>
      {children}
    </ToDosContext.Provider>
  );
}

export default ToDosContext;
