//TODO: Create DB conection

const dbconf = require("./../config/DB");

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

connectToCluster(dbconf.client).catch(console.error);

module.exports = {
  hello_helper: function (hello, world) {
    //TODO: 3 implement query and return result
  },
};
