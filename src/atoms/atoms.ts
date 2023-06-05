import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ICategories, IToDo } from "../types/category";

const { persistAtom } = recoilPersist({
  key: "localToDos",
  storage: localStorage,
});

export const darkModeState = atom({
  key: "isDark",
  default: false,
});

export const categoryState = atom<ICategories>({
  key: "category",
  default: ICategories.DOING,
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
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
