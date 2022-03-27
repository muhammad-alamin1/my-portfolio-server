const Address = require("../model/Address");

const addressPostController = async (req, res, next) => {
  const { name, email, phone, address } = req.body;

  try {
    const saveAddress = new Address({
      name,
      email,
      phone,
      address,
    });

    await saveAddress.save();
  } catch (error) {
    console.log(error);
  }
  next();
};

const addressGetController = async (req, res, next) => {
  try {
    const person = await Address.findOne({ email: req.params.email });
    res.status(200).json({
      success: true,
      person,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "User not found.!",
    });
  }
};

// update information
const addressPutController = async (req, res, next) => {
  const { id } = req.params;
  const { phone, address } = req.body;

  try {
    await Address.findOneAndUpdate(
      { _id: id },
      { $set: { phone, address } },
      { new: true }
    );
    res.status(200).json({
        success: true,
        message: 'Information Updated successfully'
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "User not found.!",
    });
  }
};

module.exports = {
  addressPostController,
  addressGetController,
  addressPutController,
};
