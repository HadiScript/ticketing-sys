const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: [100, "Room name must under 100 charactor"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        isAdmin: { type: Boolean, required: true, default: false },
        isAgent: { type: Boolean, required: true, default: false },
        profession: { type: String, default: "" },
        rating: { type: Number },
        solvedTc: { type: Number }
    },

    { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}



module.exports = mongoose.model("User", userSchema);
