export {}
declare global {
interface Date {
    getWeekDay(): string;
}
}

Date.prototype.getWeekDay = function() {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[this.getDay()];
}