const { Router } = require('express');
const { registerUser, loginUser, validateUserEmail, getAllUsers, uploadAvatar } = require('./user.controllers');
const authenticate = require('../../middlewares/auth.middleware');
const { registerUserValidator } = require('./user.validators');
const upload = require('../../middlewares/imageUpload.middleware');

const router = Router();

router
  .route('/')
  .get(authenticate, getAllUsers)
  .post(registerUserValidator, registerUser)
  .get(authenticate, (req, res) => {
    res.json({ message: 'aqui van tus msjs'})
  })


router.put('/:id', authenticate, upload.single('avatar'), uploadAvatar)

router.post('/login', loginUser)

router.post('/validate', validateUserEmail)

module.exports = router;    
