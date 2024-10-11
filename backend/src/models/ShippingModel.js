// This model will manage shipping details for orders

import mongoose from "mongoose";

const ShippingSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      zipCode: { type: String, required: true },
    },
    trackingNumber: { type: String },
    shippingMethod: { type: String },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    shippingDate: { type: Date },
    deliveryDate: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Shipping = mongoose.model("Shipping", ShippingSchema);

export default Shipping;
