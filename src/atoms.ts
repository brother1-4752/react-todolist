import { atom } from "recoil";

interface IToDo {
  text: string;
  id: number;
  catergory: "TODO" | "PENDING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
