const BigPromise = require("../middileware/bigPromise");

exports.home = BigPromise(async (req, res) => {
  res.status(200).json({
    success: true,
    greeting: "hello from API",
  });
});

exports.homeDummy = BigPromise((req, res) => {
  res.status(200).json({
    success: true,
    greeting: "this is another dummy api",
  });
});
