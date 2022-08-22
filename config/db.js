const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://hadiraza:852728..@tickets.rsj2r.mongodb.net/?retryWrites=true&w=majority`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}


module.exports = connectDB


// in local machine
// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect('mongodb://localhost/tickets', {
//             useUnifiedTopology: true,
//             useNewUrlParser: true
//         })

//         console.log(`DB connected ${conn.connection.host}`);

//     } catch (error) {
//         console.log(`Error: ${error}`);
//         process.exit(1);
//     }
// }

// module.exports = connectDB