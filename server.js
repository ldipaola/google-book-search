const express = require('express');
const mongoose = require("mongoose");
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(require("./routes/api-routes.js"));


app.listen(PORT, () => `Server running on port ${PORT}`);