// It will keep track for significant actions useful for admins or compliance

import mongoose from "mongoose";

const AuditLogSchema = new mongoose.model(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    details: {
      type: String,
    },
  },
  { timestamps: true }
);

const AuditLog = mongoose.model("AuditLog", AuditLogSchema);

export default AuditLog;
