const express = require('express');

const router = express.Router();
const db = require('../../database');

router.post('/', function (req, res) {
  const { email, password, lastname, } = req.body;

  if (!email || !password || !lastname) {
    return res.status(400).json('incorrect form submission');
  }
  db.transaction(trx => {
    trx.insert({
      password: password,
      email: email,
      date: Date()
    })
      .into('secrets')
      //last_insert_rowid()
      .then(si_id => {
        return trx('signin')
          .insert({
            si_id: si_id, //login.se_id.last_insert_rowid('secrets')
            lastname: lastname,
            email: email,
            date: Date()
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  })
    .catch(function (err) {
      console.log('error: ', err);
    });
  // .catch(err => res.status(400).json('unable to register'))
});

// router.get('/', async function (req, res) {
//   await db.select().from('nwr_price_list')
//   res.json('Register')
// });

module.exports = router;

// {
//   "password": "password",
//   "email": "email",
//   "lastname": "lastname"
// }