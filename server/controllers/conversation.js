const Conversation = require("../models/conversation");

exports.conversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  console.log(newConversation);

  try {
    const saveConversation = await newConversation.save();
    res.json(saveConversation);
  } catch (error) {
    res.status(401).json({
      error: "Failed to make conversation",
    });
  }
};
exports.getConversation = (req, res) => {
  Conversation.find(
    {
      members: { $in: [req.params.userId] },
    },
    (err, user) => {
      if (!user.length) {
        return res.status(401).json({
          error: "User not found",
        });
      }
      res.json(user);
    }
  );
};
