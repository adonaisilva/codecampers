//TODO: Create DB conection
const dbconf = require("../config/DB");

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
  signup: function(name, lastname, email, magento_id, password_encrypted, canvas_id, stripe_id){
      var sql = mysql.format("INSERT INTO users (name, lastname, email, magento_id, magento_psw, canvas_id, stripe_id) VALUES (?, ?, ?, ?, ?, ?, ?);");
      return new Promise(function(resolve, reject){

        con.query(sql, [name, lastname, email, magento_id, password_encrypted, canvas_id, stripe_id], (error, response) => {
            if (!error){
                console.log(response);

                resolve({message:'Registro completo', satatus:"success"});
            } else {
                console.log(error);
                reject(error)
            };
        });
      });
    },
};
