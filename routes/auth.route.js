const { loginController } = require('../controllers/auth.controller');

const router = require('express').Router()




router.get('/login', loginController)



module.exports = router;