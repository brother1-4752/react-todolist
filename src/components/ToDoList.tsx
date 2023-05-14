import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

export default function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [
      { text: toDo, id: Date.now(), catergory: "TODO" },
      ...prev,
    ]);
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To DO List</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "할 일을 작성해주세요.",
          })}
          placeholder="To Do..."
        />
        <button>추가</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
