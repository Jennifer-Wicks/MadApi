const express = require('express');
const router = express.Router();

const SignInPageRoute = require('./SignIn');
const RegisterPageRoute = require('./Register');
const NwrPriceListRoute = require('./priceListsApiCalls/NwrPriceList');
const priceListGetByIdRoute = require('./priceListsApiCalls/priceListGetById');
const postBookingCustomerInformationRoute = require('./bookingInformation/postBookingCustomerInformation');

router.use('/SignIn', SignInPageRoute);
router.use('/Register', RegisterPageRoute);
router.use('/NwrPriceList', NwrPriceListRoute);
router.use('/priceListGetById', priceListGetByIdRoute);
router.use('/postBookingCustomerInformation', postBookingCustomerInformationRoute);


module.exports = router;
