import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Connect, Query } from '../config/mysql';

//type_member table:
const NAMESPACE1 = 'Menu';

const createMenu = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE1, 'Inserting menu:');

    let {id_menu, name_product, description, id_category, sold, create_at, priceM, priceL } = req.body;

    let query = `INSERT INTO menu (name_type, point_start, point_end) VALUES ("${id_menu}", "${name_product}", "${description}", "${id_category}", "${sold}", "${create_at}", "${priceM}, "${priceL}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE1, 'menu created: ', result);

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

const getAllMenu = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE1, 'Getting all Menu.');

    let query = 'SELECT * FROM menu';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE1, 'Retrieved menu: ', results);

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

//category table:
const NAMESPACE2 = 'category';

const createcategory = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE2, 'Inserting category:');

    let {title } = req.body;

    let query = `INSERT INTO category (title) VALUES ("${title}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE2, 'menu created: ', result);

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

            return res.status(200). json({
                message: error.message,
                error
            });
        });
};

const getAllcategory = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE2, 'Getting all Menu.');

    let query = 'SELECT * FROM category';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE2, 'Retrieved category: ', results);

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

//img_menu table:
const NAMESPACE3 = 'img_menu';

const createimg_menu = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE3, 'Inserting menu:');

    let {id_menu, url_img } = req.body;

    let query = `INSERT INTO img_menu (id_menu, url_img) VALUES ("${id_menu}", "${url_img}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE3, 'img_menu created: ', result);

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

const getAllimg_menu = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE3, 'Getting all img_menu.');

    let query = 'SELECT * FROM img_menu';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE3, 'Retrieved img_menu: ', results);

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

//order_menu table:
const NAMESPACE4 = 'order_menu';

const createorder_menu = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE4, 'Inserting order_menu:');

    let {id_menu, user_order, amount, note, order_branch, order_location, id_order_time } = req.body;

    let query = `INSERT INTO order_menu (id_menu, user_order, amount, note, order_branch, order_location, id_order_time) VALUES ("${id_menu}", "${user_order}", "${amount}", "${note}", "${order_branch}, "${order_location}", "${id_order_time}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE4, 'order_menu created: ', result);

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

const getAllorder_menu = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE4, 'Getting all order_Menu.');

    let query = 'SELECT * FROM order_menu';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE4, 'Retrieved menu: ', results);

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

const NAMESPACE5 = 'order_time';

const createorder_time = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE5, 'Inserting order_time:');

    let {create_at } = req.body;

    let query = `INSERT INTO order_time (create_at) VALUES ("${create_at}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE5, 'order_time created: ', result);

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

const getAllorder_time = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE5, 'Getting all order_time.');

    let query = 'SELECT * FROM order_time';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE5, 'Retrieved order_time: ', results);

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

export default {createMenu, getAllMenu, createcategory, getAllcategory, createimg_menu, getAllimg_menu, createorder_menu, getAllorder_menu, createorder_time, getAllorder_time };