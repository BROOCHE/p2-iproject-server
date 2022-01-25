const { Backdrop } = require("../models");

const autho = async (req, res, next) => {
  try {
    const dropid = req.params.id;
    const thisdrop = await Backdrop.findByPk(dropid);
    if (!thisdrop) {
      throw { name: "You are not authorized" };
    }
    const thisuserid = req.currentUser.id;
    if (!thisuserid) {
      throw { name: "You are not authorized" };
    }
    if (+thisuserid !== +thisdrop.UserId) {
      throw { name: "You are not authorized" };
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = autho;
