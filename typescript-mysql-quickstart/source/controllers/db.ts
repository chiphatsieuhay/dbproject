import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Connect, Query } from '../config/mysql';

//type_member table:
const NAMESPACE1 = 'Type Member';

const createBook = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE1, 'Inserting books');

    let { name_type, point_start, point_end } = req.body;

    let query = `INSERT INTO type_member (name_type, point_start, point_end) VALUES ("${name_type}", "${point_start}", "${point_end}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE1, 'Book created: ', result);

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

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE1, 'Getting all books.');

    let query = 'SELECT * FROM type_member';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE1, 'Retrieved books: ', results);

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

//users table:

const NAMESPACE2 = 'Users';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE2, 'Inserting books');
    

    let { id, first_name, last_name, dob, password, id_branch, grade, SEOXU, id_type_member, user_img_profile } = req.body;

    let query = `INSERT INTO users (id, first_name, last_name, dob, password, id_branch, grade, SEOXU, id_type_member, user_img_profile) VALUES ("${id}", "${first_name}", "${last_name}", "${dob}", "${password}", "${id_branch}", "${grade}", "${SEOXU}", "${id_type_member}", "${user_img_profile}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE2, 'Book created: ', result);

                    return res.status(200).json({
                        result
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE2, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE2, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE2, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE2, 'Getting all books.');

    let query = 'SELECT * FROM users';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE2, 'Retrieved books: ', results);

                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE2, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE2, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE2, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};
//roll table:
const NAMESPACE3 = 'roll';

const createroll = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE3, 'Inserting books');

    let { id, enum_roll } = req.body;

    let query = `INSERT INTO roll (id_user, enum_roll) VALUES ("${id}", "${enum_roll}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE3, 'Roll created: ', result);

                    return res.status(200).json({
                        result
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE3, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE3, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE3, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

const getAllRoll = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE3, 'Getting all rolls.');

    let query = 'SELECT * FROM roll';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE3, 'Retrieved rolls: ', results);

                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE3, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE3, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE3, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

// time_work table:
const NAMESPACE4 = 'Time_work';

const createTimework = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE4, 'Inserting timeworks');

    let { id_time_work, id_user, branch_location, shift, is_late, is_paid } = req.body;

    let query = `INSERT INTO time_work (id_time_work, id_user, branch_location, shift, is_late, is_paid) VALUES ("${id_time_work}", "${id_user}", "${branch_location}", "${shift}", "${is_late}", "${is_paid}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE4, 'time_work created: ', result);

                    return res.status(200).json({
                        result
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE4, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE4, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE4, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

const getAlltime_work = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE4, 'Getting all time_works.');

    let query = 'SELECT * FROM time_work';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE4, 'Retrieved books: ', results);

                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE4, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE4, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE4, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};
const NAMESPACE5 = 'time_tmr';

const createtime_tmr = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE5, 'Inserting books');

    let { id_user, shift, id_branch } = req.body;

    let query = `INSERT INTO time_tmr (id_user, shift, id_branch) VALUES ("${id_user}", "${shift}", "${id_branch}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE5, 'Time_tmr created: ', result);

                    return res.status(200).json({
                        result
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE5, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE5, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE5, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

const getAlltime_tmr = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE5, 'Getting all time_tmrs.');

    let query = 'SELECT * FROM time_tmr';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE5, 'Retrieved time_tmrs: ', results);

                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE5, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE5, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE5, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};
export default { createBook, getAllBooks, createUser, getAllUser, createroll, getAllRoll, createTimework, getAlltime_work, getAlltime_tmr, createtime_tmr };
