require('dotenv').config();

const express = require('express');
const apiRoute = require('./routes/api/index');
const cors = require('cors');

const port = process.env.PORT || 5000

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

app.use('/api', apiRoute);

app.use("/public", express.static(process.cwd() + "/public")); //make public static

//Index page (static HTML)
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
})