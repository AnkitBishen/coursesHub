// # Authentication logic (Login, Register, etc.)

var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {  // Register new user
    try {
        // check email exist or not
        const userEmailExist = await User.findOne({ email: req.body.email });
        if (userEmailExist) {
            res.status(400).json({error:"Email already exist!"});
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password.toString(), salt);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            isAdmin: req.body.isAdmin
        });
        // console.log(req.body)
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err.message);
    }
};
const login = async (req, res) => {  // Login existing user (returns JWT token) 
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json("Wrong user!");
            return;
        }
        const validated = await bcrypt.compare(req.body.password.toString(), user.password);
        if (!validated)
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
        
        // const { password, ...others } = user._doc;
        // res.status(200).json({ ...others, accessToken });
        res.status(200).json({ accessToken });
    } catch (err) {
        res.status(500).json(err.message);
    }
};

module.exports = { register, login };
