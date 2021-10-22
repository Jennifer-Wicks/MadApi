const express = require('express');

const router = express.Router();
const db = require('../../../database');

//Get camp by ID - Change prices
router.get("/:price_id", async (req, res, next) => {
  var params = [req.params.price_id]
  await db.raw(`SELECT * FROM nwr_price_list WHERE price_id = ?`, [params])
    .then(function (data) {
      res.send(data)
    })
    .catch(err => res.status(400).json('unable to post'))
});


module.exports = router;

