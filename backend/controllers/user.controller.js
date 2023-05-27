const Users = require("../models/users.model");

const addUser = async (req, res) => {
  try {
    const user = req.body;
    if (user) {
      const result = await Users.create(user);
      res.status(201).send(result);
    }
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async (req,res) => {
    try {
        const result  = await Users.find();
        res.status(302).send(result)
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { addUser, getUsers };