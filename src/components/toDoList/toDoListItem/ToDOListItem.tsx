import { useSetRecoilState } from "recoil";
import { toDoState } from "../../../atoms/atoms";
import { ICategories, IToDo } from "../../../types/category";
import ToDoListItemContainer from "./ToDOListItem.styled";

export default function ToDOListItem({ text, id, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      console.log([
        ...prev.slice(0, targetIndex),
        newToDo,
        ...prev.slice(targetIndex + 1),
      ]);

      return [
        ...prev.slice(0, targetIndex),
        newToDo,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <ToDoListItemContainer>
      <p className="todo__text">{text}</p>

      {category !== ICategories.DOING && (
        <button className="todo__checkbtn" name="DOING" onClick={onClick}>
          가고싶은
        </button>
      )}

      {category !== ICategories.PENDING && (
        <button className="todo__checkbtn" name="PENDING" onClick={onClick}>
          갈 예정인
        </button>
      )}
      {category !== ICategories.DONE && (
        <button className="todo__checkbtn" name="DONE" onClick={onClick}>
          가본
        </button>
      )}
    </ToDoListItemContainer>
  );
}
