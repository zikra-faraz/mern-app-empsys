import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    age: {
      type: Number,
      required: [true, "Age is required."],
      min: [18, "Age must be at least 18 years."],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required."],
      min: [0, "Salary must be a positive number."],
    },
    experience: {
      type: String,
      required: true,
      required: [true, "Experience is required."],
    },
    address: {
      type: String,
      required: [true, "Address is required."],
    },
    jobTitle: {
      type: String,
      required: [true, "Job title is required."],
    },
  },
  { timestamps: true }
);

export const Employee = mongoose.model("Employee", employeeSchema);
