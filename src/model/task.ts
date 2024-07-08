import { ITask, STATUS } from "../interfaces/ITask";

export const db:ITask[] = [
    {
        id:1,
        name:"walk the dog",
        status:STATUS.TODO
    },
    {
        id:2,
        name:"walk the cat",
        status:STATUS.TODO
    }
]