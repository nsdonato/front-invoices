const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export function useCalendar({ incrementMonth = 0, incrementYear = 0 } = {}) {
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const year = new Date().getFullYear() + incrementYear;
  const month = new Date().getMonth() + incrementMonth;
  const day = new Date().getDate();
  const nameMonth = months[month];
  const date = new Date(year, month, day);
  const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());

  const dateToday = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  const maxElementsInGrid = 35;
  const lastDayFourthRow = 28;
  const days = Array(daysInMonth)
    .fill("")
    .map((_, i) => {
      return i + 1;
    });
  let totalDaysToRender = [];

  if (days.length > lastDayFourthRow) {
    const diff = maxElementsInGrid - daysInMonth;
    const restOfDays = Array(diff)
      .fill("")
      .map((_, i) => i + 1);
    totalDaysToRender = days.concat(restOfDays);
  } else {
    totalDaysToRender = days;
  }

  return {
    totalDaysToRender,
    daysInMonth,
    nameMonth,
    month,
    year,
    dateToday,
  };
}
