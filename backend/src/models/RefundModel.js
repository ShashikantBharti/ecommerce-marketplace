// This model will manage refund request and thier status.

import mongoose from "mongoose";

const RefundSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "denied", "processed"],
      default: "pending",
    },
    refundAmount: {
      type: Number,
      required: true,
    },
    processedDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Refund = mongoose.model("Refund", RefundSchema);

export default Refund;
