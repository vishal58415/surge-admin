import { logger } from "./logger";
import { mongodb } from "./mongoClient";

export const createMongoDbIndex = (async (
  collectionName: string,
  indexName: object,
  indexOptions?: object) => {
  let objResponse = [];
  try {
    objResponse = await mongodb
      .collection(collectionName)
      .createIndex({ ...indexName }, { ...indexOptions },);
  } catch (err: any) {
    logger.error("createMongoDbIndex error : " + " | " + collectionName + " | " + indexName + " | " + JSON.stringify(indexOptions) + " | " + err.stack?.toString());
  }
  return objResponse;
});

export const fetchOneRecord = (async (collectionName: string,
  query: object = {},
  options?: object) => {
  let objResponse = {};
  try {
    objResponse = await mongodb
      .collection(collectionName)
      .findOne(query);
  } catch (err: any) {
    logger.error("fetchOneRecord error : " + " | " + collectionName + " | " + JSON.stringify(query) + " | " + err.stack?.toString());
  }
  return objResponse;
});

export const fetchMultipleRecords = (async (
  collectionName: string,
  query: object,
  projection: object = {},
  sortQuery: object = {},
  limitNo: number = 1000,
  skipLimit: number = 0,
  maxTimeInMS: number = 10000) => {
  let objResponse = [];
  try {
    objResponse = await mongodb
      .collection(collectionName)
      .find(query)
      .project(projection)
      .sort(sortQuery)
      .limit(limitNo)
      .skip(skipLimit)
      .maxTimeMS(maxTimeInMS)
      .toArray();
  } catch (err: any) {
    logger.error("fetchMultipleRecords error : " + " | " + collectionName + " | " + JSON.stringify(query) + " | " + err.stack?.toString());
  }
  return objResponse;
});

export const fetchLatestRecord = (async (
  collectionName: string,
  query: object = {},
  projection: object = {},
  sortQuery: object = { _id: -1 },
  limitNo: number = 1,
  skipLimit: number = 0,
  maxTimeInMS: number = 10000) => {
  let objResponse = {};
  try {
    const dbResponse = await mongodb
      .collection(collectionName)
      .find(query)
      .project(projection)
      .sort(sortQuery)
      .limit(limitNo)
      .skip(skipLimit)
      .maxTimeMS(maxTimeInMS)
      .next();

    if (dbResponse) {
      objResponse = dbResponse;
    }
  } catch (err: any) {
    logger.error("fetchLatestRecord error : " + " | " + collectionName + " | " + JSON.stringify(query) + " | " + err.stack?.toString());
  }
  return objResponse;
});

export const insertOneRecord = (async (
  collectionName: string,
  data: object) => {
  let objResponse = [];
  try {
    objResponse = await mongodb
      .collection(collectionName)
      .insertOne(data);
  } catch (err: any) {
    logger.error("insertOneRecord error : " + " | " + collectionName + " | " + JSON.stringify(data) + " | " + err.stack?.toString());
  }
  return objResponse;
});

export const insertManyRecord = (async (
  collectionName: string,
  data: any) => {
  let objResponse = [];
  try {
    objResponse = await mongodb
      .collection(collectionName)
      .insertMany(data);
  } catch (err: any) {
    logger.error("insertManyRecord error : " + " | " + collectionName + " | " + JSON.stringify(data) + " | " + err.stack?.toString());
  }
  return objResponse;
});

export const updateOneRecord = (async (
  collectionName: string,
  query: any,
  options_find?: any,
  options_mod?: any) => {
  let objResponse = [];
  try {
    objResponse = await mongodb
      .collection(collectionName)
      .updateOne(query, { ...options_find }, { ...options_mod });
  } catch (err: any) {
    logger.error("updateOneRecord error : " + " | " + collectionName + " | " + JSON.stringify(query) + " | " + err.stack?.toString());
  }
  return objResponse;
});

export const deleteOneRecord = (async (
  collectionName: string,
  query: object,
  options?: object) => {
  let objResponse = [];
  try {
    objResponse = await mongodb
      .collection(collectionName)
      .deleteOne(query);
  } catch (err: any) {
    logger.error("deleteOneRecord error : " + " | " + collectionName + " | " + JSON.stringify(query) + " | " + err.stack?.toString());
  }
  return objResponse;
});

export const deleteManyRecord = (async (
  collectionName: string,
  query: object,
  options?: object) => {
  let objResponse = [];
  try {
    objResponse = await mongodb
      .collection(collectionName)
      .deleteMany(query);
  } catch (err: any) {
    logger.error("deleteManyRecord error : " + " | " + collectionName + " | " + JSON.stringify(query) + " | " + err.stack?.toString());
  }
  return objResponse;
});

export const countRecords = (async (
  collectionName: string,
  query: object) => {
  let objResponse = 0;
  try {
    objResponse = await mongodb.collection(collectionName).countDocuments(query);
  } catch (err: any) {
    logger.error("countRecords error : " + " | " + collectionName + " | " + JSON.stringify(query) + " | " + err.stack?.toString());

  }
  return objResponse;
});
