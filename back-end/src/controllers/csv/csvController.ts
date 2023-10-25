import { Request, Response } from "express";
import "express-async-errors";
import { AppError, handleError } from "../../erros/AppErros";

import csvCreateService from "../../services/csv/csvCreateService";
import csvGetService from "../../services/csv/csvGetService";

export class CsvController {
    csvCreateController = async (req: Request, res: Response) => {
        try {
            const data = req.body;
            const newCsv = await csvCreateService(data);
            return res.status(201).json(newCsv);
        } catch (err) {
            if (err instanceof AppError) {
                handleError(err, res);
            }
        }
    }


    csvGetController = async (req: Request, res: Response) => {
        try {
            const { body } = req.query;
            const csvData = await csvGetService(body);
            return res.status(200).json(csvData);
        } catch (err) {
            if (err instanceof AppError) {
                handleError(err, res);
            }
        }
    };
}