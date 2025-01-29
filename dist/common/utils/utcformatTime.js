"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utcToShanghaiTime = void 0;
function utcToShanghaiTime(utcTime, format = 'YYYY/MM/DD hh:mm:ss') {
    const date = new Date(utcTime);
    const shanghaiTime = date.getTime() + 8 * 60 * 60 * 1000;
    const shanghaiDate = new Date(shanghaiTime);
    let result = format.replace('YYYY', shanghaiDate.getFullYear().toString());
    result = result.replace('MM', `0${shanghaiDate.getMonth() + 1}`.slice(-2));
    result = result.replace('DD', `0${shanghaiDate.getDate()}`.slice(-2));
    result = result.replace('hh', `0${shanghaiDate.getHours()}`.slice(-2));
    result = result.replace('mm', `0${shanghaiDate.getMinutes()}`.slice(-2));
    result = result.replace('ss', `0${shanghaiDate.getSeconds()}`.slice(-2));
    return result;
}
exports.utcToShanghaiTime = utcToShanghaiTime;
