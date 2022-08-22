import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        howToImprove: { type: String, required: true },
        rate: { type: Number, required: true },
    },

    { timestamps: true }
);



export default mongoose.model("User", userSchema);
