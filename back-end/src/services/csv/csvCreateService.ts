import { ICsvCreate } from "../../interfaces";
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('banco.sqlite');

const csvCreateService = async (data: ICsvCreate[]) => {
    return new Promise((resolve, reject) => {
        db.serialize(function () {
            try {

                db.run('DELETE FROM csv');
                db.run(
                    'CREATE TABLE IF NOT EXISTS csv (id INTEGER PRIMARY KEY, name TEXT, city TEXT, country TEXT, favourite_sport TEXT)'
                );

                const insert = db.prepare(
                    'INSERT INTO csv (name, city, country, favourite_sport) VALUES (?, ?, ?, ?)'
                );

                data.forEach((item) => {
                    insert.run(
                        item.name,
                        item.city,
                        item.country,
                        item.favourite_sport
                    );
                });

                insert.finalize();

                db.all('SELECT * FROM csv', (selectErr: any, rows: ICsvCreate[]) => {
                    if (selectErr) {
                        db.run('ROLLBACK');
                        reject('Failed to retrieve data.');
                    } else {
                        db.run('COMMIT');
                        resolve(rows);
                    }
                });
            } catch (err) {
                db.run('ROLLBACK');
                reject((err as Error).message);
            }
        });
    });
};

export default csvCreateService;
