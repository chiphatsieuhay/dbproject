import { Request, Response, NextFunction } from 'express';
import logging from '../../config/logging';
import { Connect, Query } from '../../config/mysql';

const NAMESPACE = 'Book Controller';

const checkId = (id: string, first_name: string, last_name: string, dob: string, password: string, enum_role: number, res: Response) => {
    let query = `select id, first_name, last_name, password, dob from users where id ="${id}" and first_name ="${first_name}" and last_name = "${last_name}" and dob ="${dob}" and password = "${password}"`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results: any) => {
                    if (results.length == 1) {
                        Register2(res, enum_role, id);
                    } else {
                        return res.status(200).json({
                            statusCode: 500,
                            message: 'Info not correct for this users for users so can not add staff'
                        });
                    }
                    console.log(`Day la result length`, results.length);
                })
                .catch((error) => {
                    return res.status(200).json({
                        statusCode: 500,
                        message: 'your user of this staff is existed but we added staff role for this id and we check your info but invalid'
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message,
                error
            });
        });
};
const Register2 = (res: Response, enum_role: number, id_user: string) => {
    let query = `insert into role (id_user,enum_role) values ("${id_user}","${enum_role}");`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results: any) => {
                    console.log(`Day la result length`, results.length);
                    if (enum_role == 1) {
                        // when user just be user (create by phone) -> success
                        return res.status(200).json({
                            results,
                            statusCode: 200
                        });
                    } else if (enum_role == 2) {
                        // when user be staff and user (web) be added for staff this state -> next state be added for user
                        Register2(res, 1, id_user);
                    }
                })
                .catch((error) => {
                    return res.status(200).json({
                        statusCode: 200,
                        message: 'your user of this staff is existed but we added staff role for this id'
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const Register = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'post signIn');
    console.log('Day la req', req.body);
    var { id, first_name, last_name, password, dob, enum_role } = req.body;

    let query = `insert into users (id, first_name, last_name, password, dob, id_branch, grade, SEOXU, id_type_member, user_img_profile) values ("${id}", "${first_name}", "${last_name}", "${password}", "${dob}", 1, 0, 0, 1, "Not found"); `;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results: any) => {
                    // When id did not exist -> success
                    console.log(`Day la result length`, results.length);
                    // create role for a new user
                    Register2(res, enum_role, id);
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);
                    // fail  cause PK already existed (maybe this staff add this time have user acc)
                    if (enum_role == 2) checkId(id, first_name, last_name, dob, password, enum_role, res);
                    else {
                        // user add to be a user but id already exist ->fail
                        return res.status(500).json({
                            message: error.message,
                            errors: 'Info is invalid or your id already existed',
                            statusCode: 500
                        });
                    }
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { Register };
