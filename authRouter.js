const Router = require('express');
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator');
const authMiddleware = require('./middlewaree/middlewaree');
const roleMiddleware = require('./middlewaree/roleMiddleware');


router.post('/registration',[check('username', 'username cannot be empty').notEmpty(),
check('password', 'pass min length 4, max 10').isLength(4, 10)
] , controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER']),  controller.getUsers)


module.exports = router