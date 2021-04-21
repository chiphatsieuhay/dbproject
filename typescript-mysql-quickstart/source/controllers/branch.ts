import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Connect, Query } from '../config/mysql';

const NAMESPACE = 'Branches';

const createBranch = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Inserting branch');

    let { location, hotline, img_branch } = req.body;

    let query = `INSERT INTO branch (location, hotline, img_branch) VALUES ("${location}", "${hotline}", "${img_branch}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE, 'Branch created: ', result);

                    return res.status(200).json({
                        result
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

const getAllBranches = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting all branches.');

    let query = 'SELECT * FROM branch';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE, 'Retrieved branch: ', results);

                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

export default { createBranch, getAllBranches };
