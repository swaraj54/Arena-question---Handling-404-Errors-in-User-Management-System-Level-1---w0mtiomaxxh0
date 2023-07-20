const User = require("../models/User");
const handleAsyncErrors = require("../utils/handleAsyncErrors");
const handleNotFoundErrors = require("../utils/handleNotFoundErrors");

// Make all the necessary changes to the controller such that it uses the error handlers to handle 404 errors

// Controller with error handling
// const getAllUsers = handleAsyncErrors(async (req, res) => {
//   const users = await User.find();
//   //Implement 404 error handling
//   res.status(200).json(users);
// });

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users)
  } catch (error) {
    handleNotFoundErrors(res, "Users not found")
  }
}

// const getUserByID = handleAsyncErrors(async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findById(id);
//   //Implement 404 error handling
//   res.status(200).json(user);
// });

async function getUserByID(req, res) {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      res.json(user)
    } else {
      handleNotFoundErrors(res, "User not found")
    }
  } catch (error) {
    handleNotFoundErrors(res, "User not found")
  }
}



// Error Response for both controllers: 
/*
{ error: "User not found" } Status Code: 404
*/

module.exports = {
  getAllUsers,
  getUserByID,
};
