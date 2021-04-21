import express from 'express';
import controller from '../controllers/branch';

const router = express.Router();

router.post('/create/branch', controller.createBranch);
router.get('/get/branches', controller.getAllBranches);

export = router;
