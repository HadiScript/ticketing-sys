const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');



const protect = asyncHandler(async (req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.KEY)
            console.log(decoded, "from decode.")
            req.user = await userModel.findById({ _id: decoded.user.id }).select('-password')
            console.log(req.user, "after finding a user")
            console.log("am passing from here")
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

const admin = (req, res, next) => {
    // console.log(req)
    if (req.user && req.user.isAdmin) {
        console.log("am going to pass from heresss");
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
}


module.exports = { protect, admin }
