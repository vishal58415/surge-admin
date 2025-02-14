import { MONGO_DB_HOST, MONGO_DB_NAME, MONGO_DB_PASSWORD, MONGO_DB_PORT, MONGO_DB_USER } from "../configs/dbConstants";
import { collections } from "../configs/dbCollections";
import { currentTime } from "../coreServices/timeService";
import { IS_LIVE_ENVIRONMENT } from "../configs/constants";

const winston = require("winston");
require('winston-mongodb');
const { splat, combine, timestamp, printf, colorize, prettyPrint } = winston.format;
const environment = (IS_LIVE_ENVIRONMENT) ? "Live" : "Local";

const appendTimestamp = winston.format((info: any, opts: { tz: any; }) => {
    info.timestamp = currentTime();
    return info;
});

const getTransporters = (() => {
    let transport_items: any = [];
    // if (IS_LIVE_ENVIRONMENT) {
    transport_items = [
        new winston.transports.Console(),
        new winston.transports.MongoDB({
            db: "mongodb://" + MONGO_DB_USER + ":" + MONGO_DB_PASSWORD + "@" + MONGO_DB_HOST + ":" + MONGO_DB_PORT,
            dbName: MONGO_DB_NAME,
            options: {
                // useUnifiedTopology: true
            },
            collection: collections.errorLogsCollection,
            level: 'error',
            silent: false,
            label: environment
        })
    ];
    // } else {
    //     transport_items = [
    //         new winston.transports.Console()
    //     ];
    // }
    return transport_items;
});

export const logger = winston.createLogger({
    exitOnError: false,
    defaultMeta: { service: 'user-service' },
    format: combine(
        colorize(),
        appendTimestamp({ tz: 'Asia/Kolkata' }),
        printf((data: any) => {
            return `${data.timestamp} [${data.level}] : [ ${data.roomId} ] | ${environment} | ${JSON.stringify(data.message)}`;
        })
    ),
    transports: getTransporters(),
    silent: false //to stop logging true else false
});