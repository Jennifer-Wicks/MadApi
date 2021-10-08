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
  db.insert(req.body).into('nwr_price_list')
    .then(function (data) {
      res.send(data)
    })
    .catch(err => res.status(400).json('unable to post'))
});

// Get one
// router.get('/:email', function (req, res) {
//   db('lifestyle_ass_form').where({ email: req.params.email }).select()
//     .then(function (data) {
//       res.send(data);
//     })
//     .catch(err => res.status(400).json('unable to post'))
// });

module.exports = router;
