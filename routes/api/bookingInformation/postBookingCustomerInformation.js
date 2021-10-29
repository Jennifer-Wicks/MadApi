const express = require('express');

const router = express.Router();
const db = require('../../../database');


router.get('/', async function (req, res) {
  res.json("postBookingCustomerInformation")
});


module.exports = router;