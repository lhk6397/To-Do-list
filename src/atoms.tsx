import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const categroyState = atom({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categroyState);
    switch (category) {
      case "TO_DO":
        return toDos.filter((toDo) => toDo.category === "TO_DO");
      case "DOING":
        return toDos.filter((toDo) => toDo.category === "DOING");
      case "DONE":
        return toDos.filter((toDo) => toDo.category === "DONE");
    }
  },

  // get function이 있어야 selector 내부로 atom을 받을 수 있다.
  // selector를 통해 state 자체를 바꾸느 것이 아니라, 그 output을 바꾸는 것이다.
});
