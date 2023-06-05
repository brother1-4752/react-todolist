export enum ICategories {
  "DOING" = "DOING",
  "PENDING" = "PENDING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: ICategories;
}
