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
    rugImg: [{
        type: String,
        required: true,
    }],
    rugDescription: {
        type: String,
        required: true,
    },
    rugCode: {
        type: Number,
        required: true,
    },
    rugSizes: [{
        type: String,
        required: true,
    }],
    rugColors: [{
        type: String,
        required: true,
    }],
    rugMaterial: [{
        type: String,
        required: true,
    }],
    rugQuality: {
        type: String,
        required: true,
    },
    
})

const Rug = mongoose.models.Rug || mongoose.model("Rug", rugSchema);

export default Rug;