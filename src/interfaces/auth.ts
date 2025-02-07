export interface Iuser_verify_otp {
    requestId: string,
    scriptData: {
        mobileNo: string,
        otp: number,
        langId: number,
        isGooglePlayApp: boolean,
        fromGame: boolean,
        spcUp: string,
        deviceId: string;
    },
    authToken: string;
    sessionId: string;
}
 