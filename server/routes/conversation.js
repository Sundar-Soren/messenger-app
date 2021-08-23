const express = require("express");
const {
  conversation,
  getConversation,
} = require("../controllers/conversation");

const router = express.Router();

//new Conversation
router.post("/", conversation);

//Get conversation of a user
router.get("/:userId", getConversation);

module.exports = router;
