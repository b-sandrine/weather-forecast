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

const login = async(req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Users.findOne({email})
        if(user) {
            res.status(200).send(user)
        }
    }
    catch (err) {
        console.log(err)
    }
}

const getUsers = async (req,res) => {
    try {
        const result  = await Users.find();
        res.status(302).send(result)
    }
    catch (error) {
        console.log(error)
    }
}

const deleteUser = async(req,res) => {
    try {
        const result = await Users.findOneAndRemove({email: req.body.email})
        res.status(201).send(result)
    }
    catch (error) {
        console.log(error)
    }
}

const updateUser = async(req,res) => {
    try {
        const result = await Users.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).send(result)
    }
    catch(error) {
        console.log(error)
    }
}

module.exports = { addUser, login, getUsers, updateUser , deleteUser };