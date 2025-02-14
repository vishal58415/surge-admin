import moment from "moment";
import * as momentTz from "moment-timezone";

momentTz.tz.setDefault("Asia/Kolkata");

export const currentTime = (() => {
    const ct_time = moment().format("YYYY-MM-DDTHH:mm:ss");
    return ct_time;
});

export const formatTime = ((time: string) => {
    const ft_time = moment(time).format("YYYY-MM-DDTHH:mm:ss");
    return ft_time;
});

export const formatUnixTime = ((time: number) => {
    const ft_time = moment.unix((time) / 1000).format("YYYY-MM-DDTHH:mm:ss");
    return ft_time;
});

export const getTimeFromTimestamp = ((time: string) => {
    const ft_time = moment(time).format("HH:mm:ss");
    return ft_time;
});