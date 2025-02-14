import { IS_DEBUG_ENABLED } from "../configs/constants";

export const customLog = ((message: any, isForceEnable: boolean = false) => {
    if (IS_DEBUG_ENABLED) {
        console.log(message);
    } else if (isForceEnable) {
        console.log(message);
    }
});