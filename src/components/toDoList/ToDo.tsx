import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../../atoms/atoms";

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

      {category !== Categories.DOING && (
        <button name="DOING" onClick={onClick}>
          할 일
        </button>
      )}

      {category !== Categories.PENDING && (
        <button name="PENDING" onClick={onClick}>
          보류
        </button>
      )}
      {category !== Categories.DONE && (
        <button name="DONE" onClick={onClick}>
          완료
        </button>
      )}
    </li>
  );
}
