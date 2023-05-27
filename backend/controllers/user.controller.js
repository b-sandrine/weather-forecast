const Users = require("../models/users.model");

export const addUser = async (req, res) => {
  try {
    const user = req.body;
    if (user) {
      const result = await Users.save(user);
      res.status(201).send("Successfully added a user");
    }
  } catch (err) {
    console.log(err);
  }
};
