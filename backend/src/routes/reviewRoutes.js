import express from "express";
import { createReview, getReviews } from "../controllers/reviewController";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @route POST /api/reviews/:productId
 * @desc create a review for a product
 * @access Private (Authenticated Users Only)
 */
router.route("/:productId").post(authMiddleware, createReview);

/**
 * @route GET /api/reviews/:productId
 * @desc get all reviews of a product
 * @access Public
 */
router.route("/:productId").get(getReviews);

export default router;
