const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;

const client = new MongoClient(MONGO_URI);

let db;

const makeConnection = async (callback) => {
  if (db) {
    callback(null, db);
  } else {
    try {
      await client.connect();
      db = await client.db("onlineStore");
      callback(null, db);
    } catch (e) {
      callback(e, null);
    }
  }
};

const getDB = () => {
  if (db) {
    return db;
  } else {
    console.log("No DB is found");
  }
};

module.exports = { makeConnection, getDB };
