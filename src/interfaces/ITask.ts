export interface ITask{
    id:number,
    name:string,
    status:STATUS
}

export enum STATUS{
    COMPLETE = "complete",
    ONGOING = "ongoing",
    TODO = "To Do"
}