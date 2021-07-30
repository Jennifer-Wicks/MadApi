const express = require('express');
const apiRoute = require('./routes/api/index');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors())

app.use('/api', apiRoute);

app.listen(5000, () => {
  console.log('App is listening on port 5000');
})


