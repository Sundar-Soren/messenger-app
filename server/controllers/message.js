const Message = require("../models/message");

exports.createMessage = async (req, res) => {
  const newMessages = new Message(req.body);

  try {
    const saveMessage = await newMessages.save();
    res.json(saveMessage);
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({
      error: "Fail to make chat",
    });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.json(messages);
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({
      error: "Failed To Find The Chat Messages",
    });
  }
};
