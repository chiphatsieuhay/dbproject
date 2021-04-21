import express from 'express';
import controller from '../controllers/menu';

const router = express.Router();
//table Menu:
router.post('/create/menu', controller.createMenu);
router.get('/get/menu', controller.getAllMenu);
//table category:
router.post('/create/category', controller.createcategory);
router.get('/get/category', controller.getAllcategory);
//order_menu:
router.post('/create/order_menu', controller.createorder_menu);
router.get('/get/order_menu', controller.getAllorder_menu);
//img_menu:
router.post('/create/img_menu', controller.createimg_menu);
router.get('/get/img_menu', controller.getAllimg_menu);
//order_time:
router.post('/create/order_time', controller.createorder_time);
router.get('/get/order_time', controller.getAllorder_time);
export = router;
