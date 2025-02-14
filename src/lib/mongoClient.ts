import { MongoClient } from "mongodb";
import * as constants from "../configs/dbConstants";
import { customLog } from "./customLogger";

export let mongodb: any = null;

export async function createMongoDBConnection() {
  try {
    customLog("Mongo Reader Url is " + constants.MONGO_DB_SRV_HOST + "/DB: " + constants.MONGO_DB_NAME);

    const client1: any = await MongoClient.connect(constants.MONGO_DB_SRV_HOST, {
      minPoolSize: 20,
      maxPoolSize: 100,
      maxIdleTimeMS: 60000,
      auth: {
        username: constants.MONGO_DB_USER,
        password: constants.MONGO_DB_PASSWORD
      },
    });

    mongodb = client1.db(constants.MONGO_DB_NAME);

    customLog("mongodb : " + " | " + mongodb);

  } catch (err: any) {
    customLog("createMongoDBConnection error : " + " | " + err.stack?.toString());
  }
}