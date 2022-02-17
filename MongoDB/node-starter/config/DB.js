const { MongoClient } = require("mongodb");

const user = "camper";
const pass = "$9m+hZ*P`3";

const uri =
  "mongodb+srv://" +
  user +
  ":" +
  pass +
  "@sample-data.oneqx.mongodb.net/NodeTest?retryWrites=true&w=majority"; /* CodeCampers Sample Database Cluster*/
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); /*Create an instance of MongoClient, avoid deprecation warnings*/

module.exports = {
  // 1. Datos de conexion para base de datos
  client: client,
};
