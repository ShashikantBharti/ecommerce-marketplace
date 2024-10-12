import express from "express";
import {
  getNotifications,
  markAsRead,
} from "../controllers/notificationController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @route   GET /api/notifications
 * @desc    Get notifications for logged in users
 * @access  Private
 */
router.route("/").get(authMiddleware, getNotifications);

/**
 * @route   GET /api/notifications/:id
 * @desc    Mark notifications as read
 * @access  Private
 */
router.route("/:id").patch(authMiddleware, markAsRead);

export default router;
