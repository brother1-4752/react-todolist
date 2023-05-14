import { useRecoilState, useRecoilValue } from "recoil";
import { catergoryState, toDoSelector, Categories } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  const [category, setCategory] = useRecoilState(catergoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <hr />

      <select value={category} onInput={onInput}>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.PENDING}>PEDING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
