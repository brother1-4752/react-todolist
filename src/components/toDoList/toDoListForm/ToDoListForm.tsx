import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { IForm } from "../../../types/form";
import { categoryState, toDoState } from "../../../atoms/atoms";
import ToDoListFormContainer from "./ToDoListForm.styled";

export default function ToDoListForm() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    setToDos((prev) => [
      ...prev,
      { text: toDo, id: Date.now(), category: category },
    ]);
    setValue("toDo", "");
  };

  return (
    <ToDoListFormContainer onSubmit={handleSubmit(onValid)}>
      <input
        className="form__input"
        {...register("toDo", {
          required: "⚡You Have to write TO DO",
        })}
        placeholder="⚡ To Do..."
      />
      <button className="form__submit--btn">🌊 가자!</button>
    </ToDoListFormContainer>
  );
}
