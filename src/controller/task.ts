import Services from "../service"
import { Request, Response } from "express"

export function getTasks(req:Request, res:Response){
    res.json(Services.getTasks())
}

export function deleteTaskById(req:Request, res:Response){
    const { id } = req.params
    res.json(Services.deleteTaskById(parseInt(id)))
}

export function createTask(req:Request, res:Response){
    const { body } = req;
  Services.createTask(body);
  res.json({
    message: "Task created",
  });
}