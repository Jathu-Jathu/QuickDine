import { Router } from 'express'
import { adminOnly, protect } from '../middlewares/auth.js';
import { approveRestaurant, getAdminStats, getAllRestaurants } from '../controllers/adminController.js';

const adminRouter = Router()

adminRouter.use(protect);
adminRouter.use(adminOnly);

adminRouter.get("/restaurant", getAllRestaurants)
adminRouter.put("/restaurant/:id/approve", approveRestaurant)
adminRouter.get("/stats", getAdminStats)

export default adminRouter;