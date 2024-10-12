import express from "express";
import {
  approveVendor,
  deleteUser,
  getAdminDashboard,
  getAllUsers,
  getAllVendors,
  getUserById,
} from "../controllers/adminController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const router = express.Router();

/**
 * @route  GET /api/admin/users
 * @desc   Get all users
 * @access Private (Admin only)
 */
router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);

/**
 * @route  GET /api/admin/users/:id
 * @desc   Get user by id
 * @access Private (Admin only)
 */
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);

/**
 * @route  DELETE /api/admin/users/:id
 * @desc   Delete user
 * @access Private (Admin only)
 */
router.route("/users/:id").delete(authMiddleware, adminMiddleware, deleteUser);

/**
 * @route  GET /api/admin/vendors
 * @desc   Get all vendors
 * @access Private (Admin only)
 */
router.route("/vendors").get(authMiddleware, adminMiddleware, getAllVendors);

/**
 * @route  PATCH /api/admin/:id/approve
 * @desc   Approve vendors application
 * @access Private (Admin only)
 */
router
  .route("/vendors/:id/approve")
  .patch(authMiddleware, adminMiddleware, approveVendor);

/**
 * @route  GET /api/admin/dashboard
 * @desc   Get admin dashboard data
 * @access Private (Admin only)
 */
router
  .route("/dashboard")
  .get(authMiddleware, adminMiddleware, getAdminDashboard);

export default router;
