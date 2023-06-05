import { useRecoilValue } from "recoil";
import { categoryState, toDoSelector } from "../../atoms/atoms";
import { Outlet } from "react-router-dom";

import CreateToDo from "../../utils/CreateToDo";
import ToDo from "../../components/toDoList/ToDo";
import ToDoListContainer from "./ToDoList.styled";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const category = useRecoilValue(categoryState);

  return (
    <ToDoListContainer>
      <h1 className="todolist__title--category">{category}</h1>

      <CreateToDo />

      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>

      <Outlet />
    </ToDoListContainer>
  );
}
