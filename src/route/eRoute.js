import { Router } from "express";
import { Employee } from "../models/employee.js";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const { name, age, salary, experience, jobTitle, address } = request.body;
    if (!name || !age || !salary || !experience || !jobTitle || !address) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }
    const newEmployee = request.body;

    const employeeData = await Employee.create(newEmployee);
    console.log(employeeData);
    return response.status(201).send(newEmployee);
  } catch (error) {
    console.log("error while creating ", error.errors);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All emplioyess data from database
router.get("/", async (request, response) => {
  try {
    const data = await Employee.find({}).limit(4);

    return response.status(200).json({
      count: data.length,
      data,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
// Route for Get All emplioyess data from database
router.get("/all", async (request, response) => {
  try {
    const data = await Employee.find({});

    return response.status(200).json({
      count: data.length,
      data,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One employee from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const data = await Employee.findById(id);

    return response.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a employee data
router.put("/:id", async (request, response) => {
  try {
    const { name, age, salary, experience, jobTitle, address } = request.body;

    if (!name || !age || !salary || !experience || !jobTitle || !address) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }

    const { id } = request.params;

    const result = await Employee.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Employee data not found" });
    }

    return response
      .status(200)
      .send({ message: "Data is  sucessfully updated" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete an employee data
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    console.log(id);

    const result = await Employee.findByIdAndDelete(id);
    console.log(result);
    if (!result) {
      return response.status(404).json({ message: "Employee not found" });
    }

    return response.status(200).send({ message: "Data deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
export default router;
