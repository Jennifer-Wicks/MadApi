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
      date: new Date()
    })
      .into('secrets')
      .returning('email')
      .then(loginEmail => {
        return trx('signin')
          .returning('*')
          .insert({
            lastname: lastname,
            email: loginEmail[0],
            date: new Date()
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  })
    .catch(err => res.status(400).json('unable to register'))
});

module.exports = router;

// {
//   "password": "password",
//   "email": "email",
//   "lastname": "lastname"
// }