const _ARTICAL = require("../model/Artical");

exports.addArtical = async function (req, res) {
  try {
    const addArticals = await _ARTICAL.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        articals: addArticals,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

// get All memebers
exports.getAllArtical = async function (req, res) {
  try {
    var articals = await _ARTICAL.find().populate("userId");

    const tot_artical = Object.keys(articals).length;

    res.status(201).json({
      status: "success",
      total: tot_artical,
      data: {
        articals: articals,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getArticalByID = async function (req, res) {
  try {
    var artical = await _ARTICAL.findById(req.params.id);

    res.status(201).json({
      tatus: "success",
      data: {
        artical: artical,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
// TODO Implement the logic for delete
exports.deleteArtical = async function (req, res) {
  try {
    var artical = await _ARTICAL.deleteOne({ _id: req.params.id });

    res.status(201).json({
      status: "success",
      data: {
        artical: artical,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
