/************************************************************/
/***************** routes user *****************************/
/************************************************************/
const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const emailValidator = require ('../middleware/email-validator')
const passwordValidator = require('../middleware/password-validator')
//module de gestion d'authentification
const auth = require('../middleware/auth')
//module de gestion de fichier
const multer = require('../middleware/multer-user')

router.post ('/signup', multer, emailValidator, passwordValidator, userCtrl.signup)
router.post ('/login', userCtrl.login)
router.put ('/update/:id', auth, multer, userCtrl.update)
router.put ('/updatePassword/:id', auth, passwordValidator, userCtrl.updatePassword)
router.delete ('/delete/:id', auth, userCtrl.delete)
router.get ('/', auth, userCtrl.getAllUsers)
module.exports = router