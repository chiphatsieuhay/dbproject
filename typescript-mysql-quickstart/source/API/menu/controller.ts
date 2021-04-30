import { Request, Response, NextFunction } from "express";
import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";

const NAMESPACE = "Menu Controller";

const GetAllMenus = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, "GetAllMenus");

	let query = `CALL Menu_GetAllMenus()`;

	Connect()
		.then((connection) => {
			Query(connection, query)
				.then((results: any) => {
					return res.status(200).json({
						data: results,
						message: "Get succeed",
						statusCode: 200,
					});
				})
				.catch((error) => {
					logging.error(NAMESPACE, error.message, error);
					return res.status(500).json({
						message: error.message,
						// errors: "Loi tim kiem k co",
						error,
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
				error,
			});
		});
};

const GetMenuInfo = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, "GetMenuInfo");
	const id = Number(req.params.id);

	let query = `CALL Menu_GetMenuInfo("${id}")`;

	Connect()
		.then((connection) => {
			Query(connection, query)
				.then((results: any) => {
					return res.status(200).json({
						data: results,
						message: "Get succeed",
						statusCode: 200,
					});
				})
				.catch((error) => {
					logging.error(NAMESPACE, error.message, error);
					return res.status(500).json({
						message: error.message,
						// errors: "Loi tim kiem k co",
						error,
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
				error,
			});
		});
};

const SaveMenu = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, "SaveMenu");
	const {
		id_menu,
		name_product,
		description,
		id_category,
		sold,
		create_at,
		priceM,
		priceL,
	} = req.body;
// add url img (1);
	let query = `CALL Menu_SaveMenu("${id_menu}","${name_product}","${description}","${id_category}","${sold}","${create_at}","${priceM}","${priceL}")`;

	Connect()
		.then((connection) => {
			Query(connection, query)
				.then((results: any) => {
					return res.status(200).json({
						data: results,
						message: "Get succeed",
						statusCode: 200,
					});
				})
				.catch((error) => {
					logging.error(NAMESPACE, error.message, error);
					return res.status(500).json({
						message: error.message,
						// errors: "Loi tim kiem k co",
						error,
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
				error,
			});
		});
};

const Delete = (req: Request, res: Response, next: NextFunction) => {
	logging.info(NAMESPACE, "Delete");
	const ids = Number(req.body.ids);

	let query = `CALL Menu_Delete("${ids}")`;

	Connect()
		.then((connection) => {
			Query(connection, query)
				.then((results: any) => {
					return res.status(200).json({
						data: results,
						message: "Delete succeed",
						statusCode: 200,
					});
				})
				.catch((error) => {
					logging.error(NAMESPACE, error.message, error);
					return res.status(500).json({
						message: error.message,
						// errors: "Loi tim kiem k co",
						error,
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
				error,
			});
		});
};

export { GetAllMenus, GetMenuInfo, SaveMenu, Delete };
