const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

// register user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, profession } = req.body;

    const userExist = await userModel.findOne({ email });
    if (userExist) {
        res.status(400)
        throw new Error('User already exist');
    }

    // when you create with mongodb method like User.create()
    // dont need to save it, to mongodb
    user = new userModel({
        name,
        email,
        password,
        profession
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
        user: {
            id: user.id
        }
    };

    jwt.sign(
        payload,
        process.env.KEY,
        { expiresIn: '5 days' },
        (err, token) => {
            if (err) throw err;
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: token
            })
        }
    );
})
// register user ends...


// login user && auth user and get a token
const authUser = asyncHandler(async (req, res) => {
    // const { email, password } = req.body;


    const { email, password } = req.body;
    console.log(email, password)
    // const user = await userModel.findOne({ email });

    let user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
        res.status(401)
        throw new Error('Invalid email or password')
    }
    console.log("find user")

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(401)
        throw new Error('Invalid cradentials')

    }
    console.log("matched")
    
    const payload = {
        user: {
            id: user.id
        }
    };
    console.log("after payload");
    jwt.sign(
        payload,
        process.env.KEY,
        { expiresIn: '5 days' },
        (err, token) => {
            if (err) throw err;
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                isAgent: user.isAgent,
                token: token
            })
        }
    );


})

// login user && auth user and get a token  ends


module.exports = {
    registerUser,
    authUser
}