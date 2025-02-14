export const APPLICATION_VERSION = (process.env.npm_package_version) ? (process.env.npm_package_version) : "v1.1.4";

export const IS_LIVE_ENVIRONMENT = (process.env.IS_LOCAL === "true") ? false : true;

export const NODE_ENVIRONMENT_NAME = (process.env.NODE_ENV_NAME) ? process.env.NODE_ENV_NAME : "Local";

export const IS_DEBUG_ENABLED = (process.env.IS_DEBUG === "true") ? true : false;

export const APP_BASE_URL = (IS_LIVE_ENVIRONMENT) ? "xyz.in" : "localhost:1006";