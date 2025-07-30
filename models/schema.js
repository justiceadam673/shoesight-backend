import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new Schema({
  shoeName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Shoes = mongoose.model("User", schema);
export default Shoes;
