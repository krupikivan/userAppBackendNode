const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect("mongodb://localhost/flutter-node", {
    useNewUrlParser: true,
  });
  console.log("Database: Connected");
}

//Se lo guarda como objeto par despues directamente importar connect desde otro lado
module.exports = { connect };
