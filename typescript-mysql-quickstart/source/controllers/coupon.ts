import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Connect, Query } from '../config/mysql';

const NAMESPACE = 'type_coupon';

const createtype_coupon = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Inserting coupon:');

    let { title, SEOXU } = req.body;

    let query = `INSERT INTO type_coupon (title, SEOXU) VALUES ("${title}", "${SEOXU}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE, 'type_coupon created: ', result);

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

const getAlltype_coupon = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting all type_coupon.');

    let query = 'SELECT * FROM type_coupon';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE, 'Retrieved type_coupon: ', results);

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

const NAMESPACE1 = 'coupon';

const createcoupon = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE1, 'Inserting coupon:');

    let {id_type_coupon, id_user, start_time, end_time, expired } = req.body;

    let query = `INSERT INTO type_coupon (title, SEOXU) VALUES ("${id_type_coupon}", "${id_user}", "${start_time})", "${end_time}", "${expired}"`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE1, 'coupon created: ', result);

                    return res.status(200).json({
                        result
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE1, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE1, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE1, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

const getAllcoupon = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE1, 'Getting all coupon.');

    let query = 'SELECT * FROM coupon';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE1, 'Retrieved coupon: ', results);

                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE1, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE1, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE1, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

export default { createtype_coupon, getAlltype_coupon, createcoupon, getAllcoupon };