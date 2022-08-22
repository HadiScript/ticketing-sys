const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path')


const { notFound, errorHandler } = require('./middlewears/error');

// routers
const authRouters = require('./routers/authRouters')
const userRouters = require('./routers/userRouter')
const ticketRouter = require('./routers/ticketRouter')
const uploadRouter = require('./routers/uploadRouter')
// routers end



const PORT = process.env.PORT || 8080

// settings
dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
// settings ends

// apis 
app.use('/user', authRouters);
app.use('/users', userRouters);
app.use('/tc', ticketRouter);
app.use('/tc/upload', uploadRouter)

// apis end

app.use('/uploads', express.static(path.join(__dirname, '/uploadedTc')))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}


// not found route
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))

