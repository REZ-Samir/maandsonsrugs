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
        type: Number,
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
    rugMaterial: {
        type: [String],
        required: true,
        default: [],
    },
    rugQuality: {
        type: String,
        required: true,
    },
    
})

const Rug = mongoose.models.Rug || mongoose.model("Rug", rugSchema);

export default Rug;