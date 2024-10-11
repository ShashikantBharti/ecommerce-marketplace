// This model will store subscription details.

import mongoose from "mongoose";

const VendorSubscriptionSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
  },
  planName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: [String],
  startDate: {
    type: Date,
    required: true,
  },
});

const VendorSubscription = mongoose.model(
  "VendorSubscription",
  VendorSubscriptionSchema
);

export default VendorSubscription;
