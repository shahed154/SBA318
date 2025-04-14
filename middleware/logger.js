const logger = (req, res, next) => {
    console.log(`${req.method} ${req.path} at ${new Date().toISOString()}`);
    next();
  };
  
  module.exports = logger;