const mongoose = require("mongoose");
const MONGOURI = process.env.MONGO_URI;
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = InitiateMongoServer;
