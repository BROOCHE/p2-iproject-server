const jwt = require(`jsonwebtoken`);
const SECRET = process.env.TOKEN;

const createtoken = (pload) => {
  return jwt.sign(pload, SECRET);
};

const opentoken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = {
  createtoken,
  opentoken,
};
