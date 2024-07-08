import { db } from "../model/task";
import { ITask } from "../interfaces/ITask";

//get tasks
export function getTasks(){
    return db;
}

//delete task
export function deleteTaskById(idToBeDeleted:number){
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === idToBeDeleted) {
            db.splice(i, 1);
            break; 
        }
    }
}

//create task
export function createTask(task: ITask) {
    // validation
    if (!task.id || !task.name || task.status === undefined) {
        throw new Error("Invalid task data");
    }
    // Add task to the database
    db.push(task);
}