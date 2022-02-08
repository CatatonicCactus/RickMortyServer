import { Router } from 'express';
import { favList } from '../controller/controller.js';


const router = new Router() 
router.route('/favorite').get(favList)

export default router;
