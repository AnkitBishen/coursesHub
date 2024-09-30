const jwt = require('jsonwebtoken');

const fecthUser = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send("Access Denied");
    }

    try {   
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data;
        next();
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
}

module.exports = fecthUser