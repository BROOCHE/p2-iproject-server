const { opentoken } = require("../helpers/jwt");
const { User } = require("../models");

const authe = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "Invalid token" };
    }
    const pload = opentoken(access_token);
    const thisone = User.findByPk(pload.id);
    if (!thisone) {
      throw { name: "Invalid token" };
    }
    req.currentUser = {
      id: thisone.id,
      email: thisone.email,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authe;
