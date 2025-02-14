export const APPLICATION_VERSION = (process.env.npm_package_version) ? (process.env.npm_package_version) : "v1.0.0";

export const IS_LIVE_ENVIRONMENT = (process.env.IS_LOCAL === "true") ? false : true;

export const IS_DEBUG_ENABLED = (process.env.IS_DEBUG === "true") ? true : false;

export const APP_BASE_URL = (IS_LIVE_ENVIRONMENT) ? "google.in" : "localhost:3000";

export const DATA_REMOVE_DATE = "5";

export const DIRECTION_INDICATOR: any = {
    "trying-down": -0.5,
    "trying-up": 0.5,
    "up": 1,
    "down": -1,
    "side": 0
}

export const REMOTE_API_BASE_URL = "https://github.com/vishal58415/surge-wallet/";