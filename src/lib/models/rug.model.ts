import mongoose from "mongoose";

const rugSchema = new mongoose.Schema({
  rugName: {
    type: String,
    required: true,
  },
  rugPrice: {
    type: Number,
    required: true,
  },
  rugImg: {
    type: [String],
    required: true,
    default: [],
  },
  rugDescription: {
    type: String,
    required: true,
  },
  rugCode: {
    type: String,
    required: true,
  },
  rugSizes: {
    type: [String],
    required: true,
    default: [],
  },
  rugColors: {
    type: [String],
    required: true,
    default: [],
  },
  rugMaterials: {
    type: [String],
    required: true,
    default: [],
  },
  rugQuality: {
    type: String,
    required: true,
  },
  rugStock: {
    type: Number,
  },
  rugStyle: {
    type: String,
    required: true,
  },
  rugCategory: {
    type: [String],
    default: [],
  },
});

const Rug = mongoose.models.Rug || mongoose.model("Rug", rugSchema);

export default Rug;
