import axios from "axios"
import { logger } from "../lib/logger";
import { customLog } from "../lib/customLogger";

export const httpGet_general = (async (url: string) => {
    let headerOptions: any = {};
    headerOptions['Accept'] = "application/json, text/plain";
    headerOptions['User-Agent'] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36";

    const configOptions: any = {};
    configOptions['headers'] = headerOptions;
    try {
        customLog("httpGet_general configOptions " + " | " + JSON.stringify(configOptions));
        const response = await axios.get(url, configOptions);
        return response;
    } catch (error: any) {
        let errorResponseData = {};
        if (error.response) {
            errorResponseData = error.response.data;
        }

        logger.error("httpGet_general : " + " | " + url + " | " + JSON.stringify(errorResponseData) + " | " + error?.toString());
        return false;
    }
});

export const httpPost_general = (async (url: string, data: any,) => {
    let headerOptions: any = {};
    headerOptions['Accept'] = "application/json, text/plain";
    headerOptions['User-Agent'] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36";

    const configOptions: any = {};
    configOptions['headers'] = headerOptions;
    try {
        customLog("httpGet_general configOptions " + " | " + JSON.stringify(configOptions));
        const response = await axios.post(url, data, configOptions);
        return response;
    } catch (error: any) {
        let errorResponseData = {};
        if (error.response) {
            errorResponseData = error.response.data;
        }

        logger.error("httpGet_general : " + " | " + url + " | " + JSON.stringify(errorResponseData) + " | " + error?.toString());
        return false;
    }
});