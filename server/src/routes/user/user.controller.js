const { userCreate, allUser } = require("../../models/user.model");

// GET
async function getAllUsers(req, res) {
  try {
    return res.status(200).json(await allUser());
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
 
}

// POST
async function userRegister(req, res) {
  const user = req.body;

  if (!user.username || !user.email || !user.password) {
    return res.status(400).json({ error: "Missing required fields" });
  } else {
    return res.status(201).json(await userCreate(user));
  }
}


module.exports = { userRegister, getAllUsers };
