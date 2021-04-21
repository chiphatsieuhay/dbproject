import { Request, Response, NextFunction } from 'express';
import logging from '../../config/logging';
import { Connect, Query } from '../../config/mysql';

const NAMESPACE = 'Book Controller';
const Register2 = (res:Response,enum_role:number)=>{
    let query =``;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results: any) => {
                    console.log(`Day la result length`, results.length);
                   
                        return res.status(200).json({
                            results,
                            statusCode:200
                        });
                    
                    
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
}

const Register = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE,'post signIn' );
    console.log('Day la req', req.body);
    var { id, first_name, last_name, password, dob, enum_role } = req.body;
    // var  = "32";
// var y: number = +id;
//console.log(`this is id`)
    let query =`insert into users (id, first_name, last_name, password, dob, id_branch, grade, SEOXU, id_type_member, user_img_profile) values ("${id}", "${first_name}", "Le", "1234567", "2000-10-16", 1, 0, 0, 1, ""); `;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results: any) => {
                    console.log(`Day la result length`, results.length);
                   
                        Register2(res,enum_role)
                    
                    
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

export default { Register };