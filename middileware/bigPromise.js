//try catch and async - await || use promis

module.exports = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);
