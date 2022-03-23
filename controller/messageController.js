const Message = require("../model/Message");

const messagePostController = async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  try {
    const saveMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    await saveMessage.save();
  } catch (error) {
    console.log(error);
  }
  next();
};

module.exports = {
  messagePostController,
};
