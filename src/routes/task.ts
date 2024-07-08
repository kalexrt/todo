import express from "express";
import { getTasks,deleteTaskById, createTask } from "../controller/task";

const router = express();

router.get('/', getTasks);
router.post('/', createTask);
router.put('/', );
router.delete('/:id', deleteTaskById);

export default router