
import express from 'express';
const router = express.Router();
import createDb from '../controllers/createDB.js'

router.get('/setup-db', createDb);

export default router;