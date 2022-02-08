import { Router } from 'express';
import { addFavorite } from '../controller/controller.js';


const router = new Router() 
router.route('/addFavorite').post(addFavorite)

export default router;
