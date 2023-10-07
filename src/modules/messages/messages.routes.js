const { Router } = require("express");
const { creeateConversationMessage, getConversationMessages } = require("./messages.controllers");
const authenticate = require("../../middlewares/auth.middleware");
const { createConversationMessageValidator } = require("./messages.validators");

const router = Router();

router.route('/conversation/:id')
  .post(authenticate, createConversationMessageValidator, creeateConversationMessage)
  .get(authenticate, getConversationMessages)

module.exports = router;