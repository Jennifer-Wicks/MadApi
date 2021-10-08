const express = require('express');
const router = express.Router();

const SignInPageRoute = require('./SignIn');
const RegisterPageRoute = require('./Register');
const NwrPriceListRoute = require('./NwrPriceList');

router.use('/SignIn', SignInPageRoute);
router.use('/Register', RegisterPageRoute);
router.use('/NwrPriceList', NwrPriceListRoute);


module.exports = router;
