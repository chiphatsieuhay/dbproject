import express from 'express';
import controller from '../controllers/db';

const router = express.Router();
//type_member table:
router.post('/create/book', controller.createBook);
router.get('/get/books', controller.getAllBooks);
//users table:
router.post('/post/users', controller.createUser);
router.get('/get/users', controller.getAllUser);
//roll table:
router.post('/create/roll', controller.createroll);
router.get('/get/roll', controller.getAllRoll);
//time_work table:
router.post('/create/time_work', controller.createTimework);
router.get('/get/time_work', controller.getAlltime_work);
//time_tmr table:
router.post('/create/timetmr', controller.createtime_tmr);
router.get('/get/timetmr', controller.getAlltime_tmr);
export = router;
