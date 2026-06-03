const logger = (req, res, next) => {
  console.log(`${req.method} request received on ${req.url}`);
  next();
};

module.exports = logger;