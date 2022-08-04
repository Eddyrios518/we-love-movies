const { PORT = 5000 } = process.env;

const app = require("./app");
const knex = require("./db/connection");

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch(console.error);

  ////=========HEROKU======///

const express = require("express");

const cors = require("cors");

const app = express();

const router = express.Router();

router.get("/", cors(), (req, res) => {
  res.json({ message: "Hello Heroku!" });
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});

module.exports = app;
