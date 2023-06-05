import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "../../utils/CreateToDo";
import { Categories, categoryState, toDoSelector } from "../../atoms/atoms";
import ToDo from "../../components/toDoList/ToDo";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>TO DO LIST : </h1>
      <hr />

      <select value={category} onInput={onInput}>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.PENDING}>PENDING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>

      <CreateToDo />

      <ul>
        {toDos.map((toDo) => (
          // toDo 넘겨줘야함
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}
