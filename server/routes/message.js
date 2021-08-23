const express = require("express");
const { createMessage, getMessages } = require("../controllers/message");

const router = express.Router();

//new Conversation
router.post("/", createMessage);

//Get conversation of a user
router.get("/:conversationId", getMessages);

module.exports = router;
