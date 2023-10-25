import { Router } from "express";
import { CsvController } from "../controllers/csv/csvController";

const csvRouter = Router();
const controller = new CsvController()

csvRouter.get('/', controller.csvGetController)

csvRouter.post('/', controller.csvCreateController)

export default csvRouter