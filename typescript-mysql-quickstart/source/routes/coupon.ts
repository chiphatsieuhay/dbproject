import express from 'express';
import controller from '../controllers/coupon';

const router = express.Router();
//type_coupon:
router.post('/create/type_coupon', controller.createtype_coupon);
router.get('/get/type_coupon', controller.getAlltype_coupon);
//coupon table:
router.post('/create/coupon', controller.createcoupon);
router.get('/get/coupon', controller.getAllcoupon);
export = router;
