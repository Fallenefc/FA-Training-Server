import express from 'express';
import {getDogs, postDog, updateDoggo} from './controllers/Dogs'

const router = express.Router();

router.get('/', getDogs);
router.post('/Doggos', postDog);
router.put('/Doggos/:id/:type', updateDoggo)

export default router;