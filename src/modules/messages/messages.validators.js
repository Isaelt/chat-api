const {check} = require('express-validator');
const validateResult = require('../../middlewares/validator.middleware');

const createConversationMessageValidator = [
    check('content', 'error en content')
     .exists().withMessage('No se incluye la propiedad content')
     .notEmpty().withMessage('el content no debe estar vacio'),

    check('senderId', 'error en senderId')
    .exists().withMessage('no se incluye la propiedad senderId')
    .notEmpty().withMessage('la propiedad senderId no debe estar vacia')
    .isInt().withMessage('el valor de senderId debe ser un entero'),
    validateResult
     
]

module.exports ={
    createConversationMessageValidator
}