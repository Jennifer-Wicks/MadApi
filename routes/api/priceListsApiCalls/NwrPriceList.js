const express = require('express');

const router = express.Router();
const db = require('../../../database');

//Get all prices
router.get('/', function (req, res) {
  db.select().from('nwr_price_list')
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get all camp prices'))
});

//Enter new prices
router.post('/', function (req, res) {
  db.insert(req.body).into('nwr_price_list')
    .then(function (data) {
      res.send(data)
    })
    .catch(err => res.status(400).json('unable to post'))
});

//Delete by id
router.delete("/:price_id", (req, res, next) => {
  db.raw(`DELETE FROM nwr_price_list WHERE price_id = ?`,
    [req.params.price_id],
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": res.message })
        return;
      }
      // res.status(200).json({ "deletedID": this.changes }) 
      res.status(200).json({ "deletedID": this.price_id })
    })
    .catch((err) => res.status(400).json('unable to get delete'))
});

//Get by camp name - Customer search for camp prices
router.get('/:camp_name', function (req, res) {
  var params = [req.params.camp_name]
  db.raw('SELECT * FROM nwr_price_list WHERE camp_name = ?', [params])
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get camp prices'))
});

// Change info by ID
router.patch("/", (req, res, next) => {
  var reqBody = req.body;
  db.raw(`UPDATE nwr_price_list SET supplier_name = ?, area = ?, national_park = ?, camp_name = ?, low_season_start = ?, low_season_end = ?, high_season_start = ?, high_season_end = ?, accommodation_type = ?, sharing_price_ls = ?, single_price_ls = ?, sharing_price_hs = ?, single_price_hs = ?, warning_messages = ? WHERE price_id = ?`,
    [reqBody.supplier_name, reqBody.area, reqBody.national_park, reqBody.camp_name, reqBody.low_season_start, reqBody.low_season_end, reqBody.high_season_start, reqBody.high_season_end, reqBody.accommodation_type, reqBody.sharing_price_ls, reqBody.single_price_ls, reqBody.sharing_price_hs, reqBody.single_price_hs, reqBody.warning_messages, reqBody.price_id],
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": res.message })
        return;
      }
      res.status(200).json({ "updatedID": this.changes });
    })
    .catch((err) => res.status(400).json('unable to get change'))
});

module.exports = router;

