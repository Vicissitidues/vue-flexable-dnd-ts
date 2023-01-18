
export interface istate {
    target: number,
    data: []
}
export interface iprops {
    width: number,
    height: string,
    data: [],
    animation: boolean,
    row: number,
    type: string,
}
export enum eType {
    SORT = 'sort',
    SWITCH = 'switch',
}
