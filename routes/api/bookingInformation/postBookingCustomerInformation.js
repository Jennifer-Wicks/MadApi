const express = require('express');

const router = express.Router();
const db = require('../../../database');


//Get all customer information
router.get('/customer', async function (req, res) {
  await db.select().from('customer_information').orderBy('surname')
    // await db.select().from('customer_booking')
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get all camp prices'))
});

//Get all customer booking information
router.get('/booking', async function (req, res) {
  await db.select().from('customer_booking')
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get all camp prices'))
});

//Enter new customer details
router.post('/customer', async function (req, res) {
  await db.insert(req.body).into('customer_information')
    .then(function (data) {
      res.send(data)
    })
    .catch(err => res.status(400).json('unable to post'))
});

//Delete customer by id
router.delete("/customer/:ci_id", async (req, res) => {
  await db.raw(`DELETE FROM customer_information WHERE ci_id = ?`,
    [req.params.ci_id],
    res.status(200).json("deleted")
  )
    .catch((err) => res.status(400).json('unable to delete'))
});

//Enter booking details
router.post('/booking', async function (req, res) {
  await db.insert(req.body).into('customer_booking')
    .then(function (data) {
      res.send(data)
    })
    .catch(err => res.status(400).json('unable to post'))
});

//Delete booking by id
router.delete("/booking/:cb_id", async (req, res) => {
  await db.raw(`DELETE FROM customer_booking WHERE cb_id = ?`,
    [req.params.cb_id],
    res.status(200).json("deleted")
  )
    .catch((err) => res.status(400).json('unable to delete'))
});

//Get customer by email - Customer search for camp prices
router.get('/customer/:email', async function (req, res) {
  var params = [req.params.email]
  await db.raw('SELECT * FROM customer_information WHERE email = ?', [params])
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get camp prices'))
});

//Get customer bookings by email - Customer search for camp prices
router.get('/booking/:email', async function (req, res) {
  var params = [req.params.email]
  await db.raw('SELECT * FROM customer_booking WHERE email = ?', [params])
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => res.status(400).json('unable to get camp prices'))
});

module.exports = router;