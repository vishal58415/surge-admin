// mongo db connection info

export const MONGO_DB_SRV_HOST = (process.env.MONGODB_SRV_HOST_URL) ? process.env.MONGODB_SRV_HOST_URL : "mongodb://13.233.168.158"

export const MONGO_DB_HOST = (process.env.MONGODB_HOST) ? process.env.MONGODB_HOST : "13.233.168.158";

export const MONGO_DB_PORT = 27017;

export const MONGO_DB_USER = (process.env.MONGODB_USER) ? process.env.MONGODB_USER : "adminUser";

export const MONGO_DB_PASSWORD = (process.env.MONGODB_PASSWORD) ? process.env.MONGODB_PASSWORD : "584vradminuserpass584";

export const MONGO_DB_NAME = (process.env.MONGODB_NAME) ? process.env.MONGODB_NAME : "surge-wallet";