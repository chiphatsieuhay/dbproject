import { Request, Response, NextFunction } from 'express';
import logging from '../../config/logging';
import { Connect, Query } from '../../config/mysql';

const NAMESPACE = 'Book Controller';

const SignIn = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE,'post signIn' );
    console.log('Day la req', req.body);
    var { id, password,enum_role } = req.body;
    // var  = "32";
// var y: number = +id;
//console.log(`this is id`)
    let query =` SELECT * FROM users inner join role on role.id_user = users.id where id = "${id}" and password = "${password}" and enum_role = "${enum_role}";`
    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results: any) => {
                    console.log(`Day la result length`, results.length);
                    if(results.length == 1){
                        return res.status(200).json({
                            results,
                            statusCode:200
                        });
                    }
                    else{
                        return res.status(200).json({
                            results,
                            statusCode:500
                        });
                    }
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);
                    return res.status(500).json({
                        message: error.message,
                        errors: 'Loi tim kiem k co',
                        error
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

export default { SignIn };