const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb+srv://prafulla:praful123@cluster0.lnyfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected");
};
module.exports = mongoDB;
