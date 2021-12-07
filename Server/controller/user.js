const _USER = require("../model/User");

// Methods
// addStudent

exports.addUser = async function (req, res) {
  try {
    const addUser = await _USER.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user: addUser,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
