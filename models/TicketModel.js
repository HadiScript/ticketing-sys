const mongoose = require("mongoose");

const ticketModel = new mongoose.Schema(
    {
        user: {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            name: { type: String, required: true },
            email: { type: String, required: true }
        },
        state: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },

        problem: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String },

        category: { type: String, enum: ['deploy', 'hosting'] },

        confirmed: { type: Boolean, default: false },
        pending: { type: Boolean, default: true },
        onWorking: { type: Boolean, default: false },

        createdAt: { type: Date, default: Date.now },
        isPicked: { type: Boolean, default: false },
        PickedBy: {
            agent: { type: mongoose.Schema.Types.ObjectId, ref: 'User', },
            name: { type: String, },
            email: { type: String, },
            pickedDate: { type: Date, default: Date.now },
            estimatedDate: { type: Date }
        },
        privateComments: [
            {
                text: String,
                created: { type: Date, default: Date.now },
                postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', }
            }
        ],
    },

    { timestamps: true }
);

module.exports = mongoose.model("ticket", ticketModel);
