const { comparehash } = require("../helpers/bcrypt");
const { createtoken } = require("../helpers/jwt");
const { User, Backdrop, Scene } = require(`../models`);

class Controller {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const batch = {
        email,
        password,
      };
      const resu = await User.create(batch);
      res
        .status(201)
        .json({ message: `Server has successfuly register ${resu.email}` });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const batch = {
        email,
        password,
      };
      const thisuser = await User.findOne({
        where: {
          email: batch.email,
        },
      });
      if (!thisuser) {
        throw { name: "Invalid email/password" };
      }
      if (!comparehash(batch.password, thisuser.password)) {
        throw { name: "Invalid email/password" };
      }
      const payload = {
        id: thisuser.id,
      };
      const access_token = createtoken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  static async createbackdrop(req,res,next) {
    try {
      const UserId = +req.currentUser.id
      const {title, description, img, img2, img3, video, video2, video3}
      const batch = {title, description, img, img2, img3, video, video2, video3, UserId}
      const resu = await Backdrop.create({batch})
      res.status(201).json(resu)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller;
