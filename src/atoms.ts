import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "toDoLocal",
  storage: localStorage,
});
// 카테고리 타입 한정 스킬
export enum Categories {
  "DOING" = "DOING",
  "PENDING" = "PENDING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  catergory: Categories;
}

export const catergoryState = atom<Categories>({
  key: "category",
  default: Categories.DOING,
  effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(catergoryState);
    return toDos.filter((toDo) => toDo.catergory === category);
  },
});
