const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");

// get all users
const getUsers = asyncHandler(async (req, res) => {
    const users = await userModel.find({})
    res.json(users)
})

// get all users
const getAllAgents = asyncHandler(async (req, res) => {
    const users = await userModel.find({})

    let agents = users.filter(x => x.isAdmin === true)
    if (agents) {
        res.json(agents)
    } else {
        res.status(404)
        throw new Error('There is no any agents')
    }

})


// delete a user
const deleteUser = asyncHandler(async (req, res) => {
    const user = await userModel.findById(req.params.id)

    if (user) {
        await user.remove()
        res.json({ message: 'User removed' })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

const getUserById = asyncHandler(async (req, res) => {
    const user = await userModel.findById({ _id: req.params.id }).select('-password')

    if (user) {
        res.json(user)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// update users
const updateUser = asyncHandler(async (req, res) => {
    const user = await userModel.findById({ _id: req.params.id })

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.isAdmin = req.body.isAdmin
        user.isAgent = req.body.isAgent ? req.body.isAgent : false

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            isAgent: updatedUser.isAgent
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

module.exports = {
    getUsers,
    deleteUser,
    updateUser,
    getUserById,
    getAllAgents
}