const { check } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");


const createConversationValidator = [
    check('userId', 'error with userId')
      .exists().withMessage('no se incluye la propiedad userId')
      .notEmpty().withMessage('la propiedad userId no debe estar vacia')
      .isInt().withMessage('el valor de userId debe ser un entero'),
    
    check('participantId', 'error with participantId')
    .exists().withMessage('no se incluye la propiedad participantId')
    .notEmpty().withMessage('la propiedad participantId no debe estar vacia')
    .isInt().withMessage('el valor de participantId debe ser un entero'),
    validateResult,
];

const createGroupValidator = [
    check('userId', 'error with userId')
    .exists().withMessage('no se incluye la propiedad userId')
    .notEmpty().withMessage('la propiedad userId no debe estar vacia')
    .isInt().withMessage('el valor de userId debe ser un entero'),

    check('participantsIds', 'error with participantsIds')
    .exists().withMessage('no se incluye la propiedad participanstIds')
    .notEmpty().withMessage('la propiedad participanstIds no debe estar vacia')
    .isArray({min: 2}).withMessage('el valor de participantsIds debe ser un array con longitud mayor a 2'),

    check('title', 'error en el titulo del grupo')
    .exists().withMessage('No se incluye la propiedad title')
    .notEmpty().withMessage('el title no debe estar vacio')
    .isString().withMessage('el valor del title debe ser string'),
    validateResult,
]


module.exports = {
    createConversationValidator,
    createGroupValidator,
}