import { logger } from "../lib/logger";

export const ceilNumber = ((input: number) => {
    let new_number: any = 0;
    try {
        new_number = Math.ceil(input);
    } catch (error: any) {
        logger.error("ceilNumber : " + " | " + input + " | " + error.stack?.toString());
    }
    return new_number;
});

export const roundNumber = ((input: number, isString: boolean = false) => {
    let new_number: any = 0;
    try {
        new_number = (Math.round(input * 100) / 100).toFixed(2);
        if (isString === false) {
            new_number = Number(new_number);
        }
    } catch (error: any) {
        logger.error("roundNumber : " + " | " + input + " | " + error.stack?.toString());
    }
    return new_number;
});