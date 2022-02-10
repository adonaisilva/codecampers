module.exports = {
  // TODO: 1. Datos de conexion para base de datos
};

const { MongoClient } = require("mongodb");
const user = "camper";
const pass = "$9m+hZ*P`3";
const uri =
  "mongodb+srv://" +
  user +
  ":" +
  pass +
  "@sample-data.oneqx.mongodb.net/NodeTest?retryWrites=true&w=majority"; /* CodeCampers Sample Database */
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); /*Create an instance of MongoClient, avoid deprecation warnings*/

async function connectToCluster(client) {
  console.log("Connecting to CodeCampers cluster...");
  try {
    await client.connect();
    console.log("Connection successful");
    await listDatabases(client);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases in CodeCampers cluster:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

connectToCluster(client).catch(console.error);
/* (err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */
