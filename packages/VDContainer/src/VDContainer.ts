export interface istate {
  preTarget: number;
  target: number;
  data: Array<any>;
  mode: boolean;
  delable: boolean;
  addable: boolean;
  velement: boolean;
}
export interface iprops {
  width: number;
  height: string;
  data: [];
  animation: boolean;
  row: number;
  type: string;
}
export enum eType {
  SORT = 'sort',
  SWITCH = 'switch',
}
