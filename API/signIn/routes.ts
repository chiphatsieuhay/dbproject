import express from 'express';
import mime from 'mime';
import controller from './controller';

const router = express.Router();

router.post('/SignIn', controller.SignIn);
export = router;