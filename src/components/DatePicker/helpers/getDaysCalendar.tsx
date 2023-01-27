import { months } from ".";

interface dateToRenderInCalendarProp {
  dateToRenderInCalendar: Date;
}
interface dateInNumbers {
  year: number;
  month: number;
  day: number;
}
export function getDaysCalendar({
  dateToRenderInCalendar,
}: dateToRenderInCalendarProp) {
  const getDateInNumbers = (date: Date): dateInNumbers => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return { year, month, day };
  };
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const { year, month } = getDateInNumbers(dateToRenderInCalendar);
  const daysInMonth = getDaysInMonth(month, year);
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
    nameMonth: months[month],
    month,
    year,
  };
}
