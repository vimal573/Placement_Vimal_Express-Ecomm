const express = require("express");
const router = express.Router();
const {
  sendRazorpayKey,
  sendStripeKey,
  captureStripePayment,
  captureRazorpayPayment,
} = require("../controller/paymentController");
const { isLoggedIn } = require("../middileware/user");

router.route("/stripekey").get(isLoggedIn, sendStripeKey);
router.route("/razorpaykey").get(isLoggedIn, sendRazorpayKey);

router.route("/capturestripe").post(isLoggedIn, captureStripePayment);
router.route("/capturerazorpay").post(isLoggedIn, captureRazorpayPayment);

module.exports = router;
