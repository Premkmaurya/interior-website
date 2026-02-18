const express = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router();


// Auth routes
router.post('/register',authController.registerUser);

router.post('/login', authController.loginUser);

router.post('/logout',authMiddleware,authController.logoutUser);

router.get('/me',authMiddleware, authController.checkAuth);

module.exports = router;