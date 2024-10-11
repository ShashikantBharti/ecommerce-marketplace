// This model will manage payments made to vendors for the products they sell.

import mongoose from "mongoose";

const VendorPayoutSchema = new mongoose.Schema(
  {
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    payoutMathod: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    transactionId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const VendorPayout = mongoose.model("VendorPayout", VendorPayoutSchema);

export default VendorPayout;
