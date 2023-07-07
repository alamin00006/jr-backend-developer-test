const mongoose = require("mongoose");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

const uri = `mongodb+srv://alamin:mQB7LAGnQXuctqXC@movie.qzd1h4s.mongodb.net/?retryWrites=true&w=majority`;

const connectWithDB = () => {
  mongoose.connect(uri, options, (err, db) => {
    if (err) {
      console.error(err);
    } else {
      console.log("database connection succesfull");
    }
  });
};

module.exports = connectWithDB;
