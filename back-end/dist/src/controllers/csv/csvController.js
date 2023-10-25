"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvController = void 0;
require("express-async-errors");
const AppErros_1 = require("../../erros/AppErros");
const csvCreateService_1 = __importDefault(require("../../services/csv/csvCreateService"));
const csvGetService_1 = __importDefault(require("../../services/csv/csvGetService"));
class CsvController {
    constructor() {
        this.csvCreateController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const newCsv = yield (0, csvCreateService_1.default)(data);
                return res.status(201).json(newCsv);
            }
            catch (err) {
                if (err instanceof AppErros_1.AppError) {
                    (0, AppErros_1.handleError)(err, res);
                }
            }
        });
        this.csvGetController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = req.query;
                const csvData = yield (0, csvGetService_1.default)(body);
                return res.status(200).json(csvData);
            }
            catch (err) {
                if (err instanceof AppErros_1.AppError) {
                    (0, AppErros_1.handleError)(err, res);
                }
            }
        });
    }
}
exports.CsvController = CsvController;
