import { useRecoilValue } from "recoil";
import { categoryState, toDoSelector } from "../../atoms/atoms";
import { Outlet } from "react-router-dom";

import ToDoListContainer from "./ToDoList.styled";
import { ToDOListItem, ToDoListForm } from "../../components/toDoList";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const category = useRecoilValue(categoryState);

  const refinedCategory =
    category === "DOING"
      ? "가고싶은 나라들"
      : category === "PENDING"
      ? "갈 예정인 나라들"
      : "가본 나라들";

  return (
    <ToDoListContainer>
      <h1 className="todolist__title--category">{refinedCategory}</h1>

      <ToDoListForm />

      <ul className="todolist__list">
        {[0, 1].map((x) => (
          <div className="todolist--marker" key={x}></div>
        ))}

        {toDos.map((toDo) => (
          <ToDOListItem key={toDo.id} {...toDo} />
        ))}
      </ul>

      <Outlet />
    </ToDoListContainer>
  );
}
