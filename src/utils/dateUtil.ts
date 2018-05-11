 function getOrthodoxEaster(year:number)
{
    var a = year % 19;
    var b = year % 7;
    var c = year % 4;

    var d = (19 * a + 16) % 30;
    var e = (2 * c + 4 * b + 6 * d) % 7;
    var f = (19 * a + 16) % 30;
    var key = f + e + 3;

    var month = (key > 30) ? 5 : 4;
    var day = (key > 30) ? key - 30 : key;

    return new Date(year, month - 1, day);
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function isWorkingDay(targetDate:Date)
  {
      var dayOfWeek = targetDate.getDay();
      var isWorkingDay = dayOfWeek != 0 && dayOfWeek != 6;

      return isWorkingDay;
  }

export {getOrthodoxEaster, addDays, isWorkingDay};