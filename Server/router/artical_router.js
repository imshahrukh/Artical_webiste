const express = require("express");
const articalController = require("../controller/artical");
const articalRouter = express.Router();
// POST
// localhost:8000/v1/member

articalRouter
  .route("/artical")
  .post(articalController.addArtical)
  .get(articalController.getAllArtical);

// POST
// localhost:8000/v1/member/12345

articalRouter
  .route("/artical/:id")
  .get(articalController.getArticalByID)
  .delete(articalController.deleteArtical);
module.exports = articalRouter;
