import { useSetRecoilState } from "recoil";
import { toDoState } from "../../atoms/atoms";
import { ICategories, IToDo } from "../../types/category";

export default function ToDo({ text, id, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...prev.slice(0, targetIndex),
        newToDo,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>

      {category !== ICategories.DOING && (
        <button name="DOING" onClick={onClick}>
          할 일
        </button>
      )}

      {category !== ICategories.PENDING && (
        <button name="PENDING" onClick={onClick}>
          보류
        </button>
      )}
      {category !== ICategories.DONE && (
        <button name="DONE" onClick={onClick}>
          완료
        </button>
      )}
    </li>
  );
}
