const express = require('express');

const router = express.Router();
const db = require('../../../database');

//Get all prices
router.get('/', async function (req, res) {
  await db.select().from('nwr_price_list').orderBy('camp_name')
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get all camp prices'))
});

//Enter new prices
router.post('/', async function (req, res) {
  await db.insert(req.body).into('nwr_price_list')
    .then(function (data) {
      res.send(data)
    })
    .catch(err => res.status(400).json('unable to post'))
});

//Delete by id
router.delete("/:price_id", async (req, res) => {
  await db.raw(`DELETE FROM nwr_price_list WHERE price_id = ?`,
    [req.params.price_id],
    res.status(200).json("deleted")
  )
    .catch((err) => res.status(400).json('unable to delete'))
});

//Get by camp name - Customer search for camp prices
router.get('/:camp_name', async function (req, res) {
  var params = [req.params.camp_name]
  await db.raw('SELECT * FROM nwr_price_list WHERE camp_name = ?', [params])
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get camp prices'))
});

// Change info by ID
router.put("/", async (req, res, next) => {
  var reqBody = req.body;
  await db.raw(`UPDATE nwr_price_list SET supplier_name = ?, area = ?, national_park = ?, camp_name = ?, low_season_start = ?, low_season_end = ?, high_season_start = ?, high_season_end = ?, accommodation_type = ?, sharing_price_ls = ?, single_price_ls = ?, sharing_price_hs = ?, single_price_hs = ?, warning_messages = ?, date = ? WHERE price_id = ?`,
    [reqBody.supplier_name, reqBody.area, reqBody.national_park, reqBody.camp_name, reqBody.low_season_start, reqBody.low_season_end, reqBody.high_season_start, reqBody.high_season_end, reqBody.accommodation_type, reqBody.sharing_price_ls, reqBody.single_price_ls, reqBody.sharing_price_hs, reqBody.single_price_hs, reqBody.warning_messages, Date(), reqBody.price_id],
    res.status(200).json("updated")
  )
    .catch((err) => res.status(400).json('unable to get change'))
});

module.exports = router;