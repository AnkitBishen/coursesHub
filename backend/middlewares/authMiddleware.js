const jwt = require('jsonwebtoken');

const fecthUserFormToken = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send({error:"Access Denied"});
    }

    try {   
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data;
        next();
    } catch (error) {
        res.status(400).send({error:"Invalid Token"});
    }
}

module.exports = {fecthUserFormToken}