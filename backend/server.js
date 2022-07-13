const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const chalk = require("chalk");
const log = console.log;
const noteRoutes = require("./routes/noteRoutes");

// Database Setup
// opne terminal and run this command: systemctl start mongodb
mongoose
  .connect(process.env.MONGO_COMPASS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    log(chalk.black.bgGreen(" Database Connected Successfully "))
  })
  .catch((err) => {
    log(chalk.black.bgGreen(" Database Connection Failed " + err.message  + " "));
  });

// middleware
app.use(express.json());
app.use((req, res, next) => {
  log(chalk.bgMagenta(` ${req.path} => ${req.method} `));
  next();
});

// routes
app.use("/api/notes/", noteRoutes);

app.listen(process.env.PORT, () => {
  log(chalk.bgCyan.black(` Server listening on port ${process.env.PORT} `));
});