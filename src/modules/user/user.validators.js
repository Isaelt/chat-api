const {check, validationResult} = require('express-validator');
const validateResult = require('../../middlewares/validator.middleware');

const registerUserValidator = [
    check('firstname', 'error con firstname')
     .exists().withMessage('No se incluye la propiedad firstname')
     .notEmpty().withMessage('el firstname no debe estar vacio')
     .isString().withMessage('el valor del firstname debe ser string')
     .isLength({min: 2, max:50}).withMessage('la longitud del nombre debe ser entre 2 y 50 caracteres')
     .matches(/^[a-zA-Z\s]/).withMessage('el firstname solo aceptan letras'),
    check('lastname', 'error con lastname')
      .exists().withMessage('No se incluye la propiedad lastname')
      .notEmpty().withMessage('el lastname no debe estar vacio')
      .isString().withMessage('el valor del lastname debe ser string')
      .isLength({min: 2, max:50}).withMessage('la longitud del lastname debe ser entre 2 y 50 caracteres')
      .matches(/^[a-zA-Z\s]/).withMessage('el lastname solo aceptan letras'),
    check('email', 'error con el campo email')
      .exists().withMessage('la propiedad email no esta incluida')
      .notEmpty().withMessage('la propiedad email no debe estar vacia')
      .isString().withMessage('la propiedad email debe ser un string')
      .isEmail().withMessage('la prpiedad email no tiene el formato de correo')
      .isLength({min: 7, max: 50}).withMessage('la propiedad email deber ser entre 7 y 50 caracteres'),
    check('password', 'error en el campo password')
      .exists().withMessage('la propiedad password no esta incluida')
      .notEmpty().withMessage('la propiedad password no debe estar vacia')
      .isString().withMessage('la propiedad password debe ser un string')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%-^&*]{8,}$/).withMessage('el password debe ser minimo de 8 caracteres, debe incluir una mayuscula, una minuscula y un caracter especial'),    
    validateResult,
];

const loginValidatior = [
    check('email', 'error con la propiedad email')
      .exists().withMessage('la propiedad email no esta incluida')
      .notEmpty().withMessage('la propiedad email no debe estar vacia')
      .isString().isString().withMessage('la propiedad email debe ser un string')
      .isEmail().withMessage('la prpiedad email no tiene el formato de correo'),
    check('password')
      .exists().withMessage('la propiedad password no esta incluida')
      .notEmpty().notEmpty().withMessage('la propiedad password no debe estar vacia')
      .isString().isString().withMessage('la propiedad password debe ser un string'),
      validateResult
];

module.exports = {
    registerUserValidator,
    loginValidatior
}