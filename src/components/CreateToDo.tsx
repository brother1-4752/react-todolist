import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState, catergoryState } from "../atoms";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(catergoryState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((prev) => [
      // category 생략 안되는 이유 찾기
      ...prev,
      { text: toDo, id: Date.now(), catergory: category },
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", {
          required: "할 일을 작성해주세요.",
        })}
        placeholder="To Do..."
      />
      <button>추가</button>
    </form>
  );
}
