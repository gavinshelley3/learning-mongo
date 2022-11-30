const mongopass = "DdJcIGmnMvI8GQnN";
const mongouser = "gavin";
const { MongoClient } = require("mongodb");

const mongostring = `mongodb+srv://${mongouser}:${mongopass}@cluster0.pr3lclv.mongodb.net/?retryWrites=true&w=majority`;

const mongoose = require("mongoose");
mongoose.connect(mongostring, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const Cat = mongoose.model("Cat", {
  name: String,
});

const kitty = new Cat({
  name: "Morris",
});

async function work() {
  await kitty.save();
  console.log("meow");
  let kitties = await Cat.find();
  console.log(kitties);
}

work();
