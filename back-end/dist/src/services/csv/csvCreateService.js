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
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('banco.sqlite');
const csvCreateService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        db.serialize(function () {
            try {
                db.run('DELETE FROM csv');
                db.run('CREATE TABLE IF NOT EXISTS csv (id INTEGER PRIMARY KEY, name TEXT, city TEXT, country TEXT, favourite_sport TEXT)');
                const insert = db.prepare('INSERT INTO csv (name, city, country, favourite_sport) VALUES (?, ?, ?, ?)');
                data.forEach((item) => {
                    insert.run(item.name, item.city, item.country, item.favourite_sport);
                });
                insert.finalize();
                db.all('SELECT * FROM csv', (selectErr, rows) => {
                    if (selectErr) {
                        db.run('ROLLBACK');
                        reject('Failed to retrieve data.');
                    }
                    else {
                        db.run('COMMIT');
                        resolve(rows);
                    }
                });
            }
            catch (err) {
                db.run('ROLLBACK');
                reject(err.message);
            }
        });
    });
});
exports.default = csvCreateService;
