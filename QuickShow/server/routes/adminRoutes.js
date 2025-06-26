import express from 'express';
import { protectAdmin } from '../middleware/auth.js';
import { getAllBookings, getAllSHows, getDashboardData, isAdmin } from '../controllers/AdminController.js';


const adminRouter = express.Router();

adminRouter.get('/is-admin', protectAdmin, isAdmin);
adminRouter.get('/dashboard', protectAdmin, getDashboardData);
adminRouter.get('/all-shows', protectAdmin, getAllSHows);
adminRouter.get('/all-bookings', protectAdmin, getAllBookings);

export default adminRouter;