const bcr = require(`bcryptjs`);

const createhash = (password) => {
  return bcr.hashSync(password, 6);
};

const comparehash = (password, hashed) => {
  return bcr.compareSync(password, hashed);
};

module.exports = {
  createhash,
  comparehash,
};
