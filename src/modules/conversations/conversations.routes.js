const { Router } = require('express');
const { createConversation, createGroupConversation, getAllConversations } = require('./conversations.controller');
const authenticate = require('../../middlewares/auth.middleware');
const { createConversationValidator, createGroupValidator } = require('./conversations.validators');

const router = Router();

router.post('/', authenticate, createConversationValidator, createConversation);

router.get('/:id', authenticate, getAllConversations);

router.post('/group', authenticate, createGroupValidator, createGroupConversation);

module.exports = router;
