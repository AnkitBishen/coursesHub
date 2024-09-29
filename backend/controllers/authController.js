// # Authentication logic (Login, Register, etc.)

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {  // Register new user
    try {
        // const salt = await bcrypt.genSalt(10);
        // const hashedPass = await bcrypt.hash(req.body.password, salt);
        // console.log(hashedPass)
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin
        });
        // console.log(req.body)
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const login = async (req, res) => {  // Login existing user (returns JWT token) 
    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) {
            res.status(400).json("Wrong user!");
            return;
        }
        // const validated = await bcrypt.compare(req.body.password, user.password);
        // if (!validated)
        if (req.body.password.toString() !== user.password) 
        {
            res.status(400).json("Wrong password!");
            return;
        }
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        );
        
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { register, login };
