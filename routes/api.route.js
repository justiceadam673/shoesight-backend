import { Router } from "express";
import Shoes from "../models/schema.js";
const route = Router();

// GET all shoes
route.get("/get-shoes", async (req, res, next) => {
  try {
    const shoes = await Shoes.find();
    console.log("GET request successful");
    return res.status(200).json({ message: "Shoes fetched", data: shoes });
  } catch (error) {
    next(error);
  }
});

// POST new shoe
route.post("/post-shoes", async (req, res, next) => {
  try {
    const data = await Shoes.create(req.body);
    console.log("POST request successful", data);
    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

// DELETE shoe by ID
route.delete("/delete-shoes/:id", async (req, res, next) => {
  try {
    const deletedShoe = await Shoes.findByIdAndDelete(req.params.id);
    if (!deletedShoe) {
      return res.status(404).json({ message: "Shoe not found" });
    }
    console.log("DELETE request successful");
    return res
      .status(200)
      .json({ message: "Shoe deleted successfully", data: deletedShoe });
  } catch (error) {
    next(error);
  }
});

// UPDATE shoe by ID
route.put("/update-shoes/:id", async (req, res, next) => {
  try {
    const updatedShoe = await Shoes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedShoe) {
      return res.status(404).json({ message: "Shoe not found" });
    }
    console.log("PUT request successful");
    return res
      .status(200)
      .json({ message: "Shoe updated successfully", data: updatedShoe });
  } catch (error) {
    next(error);
  }
});

export default route;
