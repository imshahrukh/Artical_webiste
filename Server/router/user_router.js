const express = require("express");
const userController = require("../controller/user");
const userRouter = express.Router();
// POST
// localhost:8000/v1/member

userRouter.route("/user").post(userController.addUser);
//   .get(memberController.getAllMembers);

// POST
// localhost:8000/v1/member/12345

// userRouter
//   .route("/member/:id")
//   .get(memberController.getMemeberByID)
//   .patch(memberController.updateMemberByID);
module.exports = userRouter;
