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

module.exports = addUser;