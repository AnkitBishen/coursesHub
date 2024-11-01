// # Authentication routes

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { fecthUserFormToken } = require('../middlewares/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/userinfo', fecthUserFormToken, authController.userinfo);



module.exports = router;
