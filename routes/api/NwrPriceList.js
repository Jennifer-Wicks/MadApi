const express = require('express');

const router = express.Router();
const db = require('../../database');

router.get('/', function (req, res) {
  db.select().from('nwr_price_list')
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      console.log('error: ', err);
    });
});

router.post('/', function (req, res) {
  db.insert(req.body).returning('*').into('nwr_price_list').then(function (data) {
    res.send(data)
  })
    .catch(err => res.status(400).json('unable to post'))
});

// "price_id": 2,
// "supplier_name": "Namibia Wildlife Resort",
// "area": "Fish River Canyon",
// "national_park": "Richtersveld Transfortier Park",
// "camp_name": "Ai-Ais",
// "low_season_start": "2020-10-30T22:00:00.000Z",
// "low_season_end": "2021-06-28T22:00:00.000Z",
// "high_season_start": "2021-06-29T22:00:00.000Z",
// "high_season_end": "2021-10-29T22:00:00.000Z",
// "accommodation_type": "Camping two",
// "sharing_price_ls": "0",
// "single_price_ls": "310",
// "sharing_price_hs": "0",
// "single_price_hs": "310",
// "warning_messages": "This will be a warning message i.e - Camp under repair after flooding",
// "date": "2021-06-23T22:00:00.000Z"

// Get one
// router.get('/:email', function (req, res) {
//   db('lifestyle_ass_form').where({ email: req.params.email }).select()
//     .then(function (data) {
//       res.send(data);
//     })
//     .catch(err => res.status(400).json('unable to post'))
// });

module.exports = router;
