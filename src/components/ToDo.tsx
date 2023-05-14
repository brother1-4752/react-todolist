import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../atoms";

export default function ToDo({ text, catergory, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const targetIdx = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, catergory: name as any };

      // 만들어진 순서에 영향을 받는다.
      // 이벤트 발생 기반으로 영향을 받게 수정해야 한다.
      return [
        ...prev.slice(0, targetIdx),
        newToDo,
        ...prev.slice(targetIdx + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {/* 다음 카테고리가 아닐 경우 show */}
      {catergory !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          하는 중
        </button>
      )}
      {catergory !== Categories.PENDING && (
        <button name={Categories.PENDING} onClick={onClick}>
          보류
        </button>
      )}
      {catergory !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          완료
        </button>
      )}
    </li>
  );
}
