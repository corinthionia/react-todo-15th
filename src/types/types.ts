export interface IItem {
  id: number;
  text: string;
  isDone: boolean;
}

export type ItemListType = IItem[];

export interface isDoneList {
  isDoneList: boolean;
}
