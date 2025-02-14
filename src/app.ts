import { IS_LIVE_ENVIRONMENT, APPLICATION_VERSION } from "./configs/constants";
import { testFunctions } from "./test";
import { createMongoDBConnection } from "./lib/mongoClient";
import { logger } from "./lib/logger";

export const startServices = (async (sInstance: any) => {
    try {
        await createMongoDBConnection();

        console.log("APPLICATION_VERSION : " + " | " + APPLICATION_VERSION);
        console.log("IS_LIVE_ENVIRONMENT : " + " | " + IS_LIVE_ENVIRONMENT);

        if (IS_LIVE_ENVIRONMENT) {
            console.log("IS_LIVE_ENVIRONMENT");
        } else {
            await testFunctions();
        }
    } catch (error: any) {
        // send mail or sms
        logger.error("startServices error : " + " | " + error.stack?.toString());
    }
});